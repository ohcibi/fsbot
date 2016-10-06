const irc = require("irc");

const client = new irc.Client("irc.quakenet.org", "pen1sp1rat", {
  channels: ["#hhu-fscs"]
});

client.addListener("message", function(from, to, message) {
  if (message.substr("moin") && Math.random() > .8) {
    client.say("#hhu-fscs", `${from}: GUTEN ABEND!!!`);
  }
});
