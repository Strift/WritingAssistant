const Log = require('../utils/logger.js')
const api = require('../utils/api.js')

exports.run = (client, message, args) => {
  // If there is not enough parameters
  if (args.length === 0) {
    return message.channel.send('Usage: !create <topic>')
      .then(msg => Log.sent(msg))
      .catch(console.error)
  }

  // JSON body
  const body = JSON.stringify({
    writer: message.author.username,
    topic: args.join(" ")
  })

  // Send request to the web service
  api.create(body).then((json) => {
    message.reply(`Created article #${json.data.id}: "${json.data.topic}"`)
      .then(msg => Log.sent(msg))
      .catch(console.error)
  })
  .catch(console.error)
}
