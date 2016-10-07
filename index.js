const irc = require("irc")
const config = require("getconfig")

const responses = require("./responses")

const client = new irc.Client(config.host, config.nick, {
  channels: config.channels,
  showErrors: true,
  realName: config.realName,
  userName: config.userName
})

client.addListener("message", function(from, to, message) {
  if (message.substr("moin") && Math.random() > 0.8) {
    broadcast(`${from}: GUTEN ABEND!!!`)
  }

  if (message[0] === "!") {
    broadcast(responses[message.slice(1).split(" ")[0]])
  }
})

function broadcast(message) {
  config.channels.forEach(channel => client.say(channel, message))
}
