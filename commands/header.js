const Log = require('../utils/logger.js')
const api = require('../utils/api.js')

exports.run = (client, message, args) => {
  // If there is not enough parameters
  if (args.length === 0 || message.attachments.size !== 1) {
    return message.channel.send('Usage: !header <id>\nThis command requires one image attached.')
      .then(msg => Log.sent(msg))
      .catch(console.error)
  }

  // JSON body
  const body = JSON.stringify({
    header_url: message.attachments.first().url
  })

  // Send request to the web service
  api.update(args[0], body).then((json) => {
    message.reply(`Set header for article #${json.data.id}: ${json.data.header_url}`)
      .then(msg => Log.sent(msg))
      .catch(console.error)
  })
  .catch(console.error)
}
