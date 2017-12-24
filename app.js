const Discord = require('discord.js')
const config = require('./config.json')
const Log = require('./utils/logger.js')

const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`)
})

client.on('message', message => {
  if (message.author.bot) return
  if (!message.content.startsWith(config.prefix)) return

  Log.received(message)

  // Retrieve command and arguments
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()

  // Call the appropriate command
  try {
    let commandFile = require(`./commands/${command}.js`)
    commandFile.run(client, message, args)
  } catch (err) {
    console.error(err)
  }
})

// Connect to discord
client.login(config.token)