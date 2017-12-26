const Log = require('../utils/logger.js')
const api = require('../utils/api.js')

exports.run = (client, message, args) => {
  // If there is not enough parameters
  if (args.length !== 1) {
    return message.channel.send('Usage: !corrected <id>')
      .then(msg => Log.sent(msg))
      .catch(console.error)
  }

  // JSON body
  const body = JSON.stringify({ corrected_at: new Date() })

  // Send request to the web service
  api.update(args[0], body).then((json) => {
    message.reply(`Article #${json.data.id} has been corrected: ${json.data.url}`)
      .then(msg => Log.sent(msg))
      .catch(console.error)
  })
  .catch(console.error)
}
