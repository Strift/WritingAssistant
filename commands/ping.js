const Log = require('../utils/logger.js')

exports.run = (client, message, args) => {
	message.reply("pong!")
    .then(msg => Log.sent(msg))
    .catch(console.error)
}