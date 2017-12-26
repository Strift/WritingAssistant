exports.received = (message) => {
  console.log(`Received from ${message.author.username}:\n\t${message.content}`)
}

exports.sent = (message) => {
  console.log(`Sent:\n\t${message}`)
}
