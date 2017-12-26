const Log = require('../utils/logger.js')
const api = require('../utils/api.js')

exports.run = (client, message, args) => {
  // If there is not enough parameters
  if (args.length !== 2) {
    return message.channel.send('Usage: !correct <id> <url>')
      .then(msg => Log.sent(msg))
      .catch(console.error)
  }

  // JSON body
  const body = JSON.stringify({ url: args[1] })

  // Send request to the web service
  api.update(args[0], body).then((json) => {
    message.reply(`Article #${json.data.id} ready for correction: ${json.data.url}`)
      .then(msg => Log.sent(msg))
      .catch(console.error)
  })
  .catch(console.error)
}
