const Discord = require("discord.js");
exports.run = (client, message, args, suffix) => {

message.guild.members.map(m => m.sendMessage(suffix)).catch(e => {});
}