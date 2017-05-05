const Discord = require("discord.js");
exports.run = (client, message, args) => {

message.guild.members.map(m => m.sendMessage(`${args}`))
}