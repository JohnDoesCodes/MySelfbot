const Discord = require("discord.js");
exports.run = (client, message) => {
    const args = message.content.split(' ').slice(1).join(' ');
if (!args) {
    return message.channel.sendMessage("Gimme something to say nigga.")
  }
message.guild.members.map(m => m.sendMessage(`${args}`)); {
    return message.channel.sendMessage("Done!")
}
}