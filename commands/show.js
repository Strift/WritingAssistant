const Log = require('../utils/logger.js')
const api = require('../utils/api.js')

exports.run = (client, message, args) => {
  // If there is not enough parameters
  if (args.length === 0) {
    return message.channel.send('Usage: !show <id>')
      .then(msg => Log.sent(msg))
      .catch(console.error)
  }

  // Send request to the web service
  api.show(args[0]).then((json) => {
    message.reply(`Article #${json.data.id}\nTopic: ${json.data.topic}\nAuthor: ${json.data.writer}`)
      .then(msg => Log.sent(msg))
      .catch(console.error)
  })
  .catch(console.error)
}
