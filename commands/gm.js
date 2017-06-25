const Discord = require("discord.js");
exports.run = (client, message) => {
    const args = message.content.split(' ').slice(1).join(' ');
if (!args) {
    return message.channel.send("Gimme something to say nigga.")
  }
message.guild.members.map(m => m.send(`${args}`)); {
    return message.channel.sendMessage("Done!")
}
};
