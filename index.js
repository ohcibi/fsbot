const irc = require("irc")
const config = require("getconfig")

const client = new irc.Client(config.host, config.nick, {
  channels: config.channels,
  showErrors: true,
  realName: config.realName
})

client.addListener("message", function(from, to, message) {
  if (message.substr("moin") && Math.random() > 0.8) {
    broadcast(`${from}: GUTEN ABEND!!!`)
  }
})

function broadcast(message) {
  config.channels.forEach(channel => client.say(channel, message))
}
