const Discord = require("discord.js");
exports.run = (client, message) => {
    const args = message.content.split(' ').slice(1).join(' ');
message.guild.members.map(m => m.sendMessage(`${args}`))
}