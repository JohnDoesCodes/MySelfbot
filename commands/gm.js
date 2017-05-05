const Discord = require("discord.js");
let args = message.content.split(" ").slice(1).join(" ");
exports.run = (client, message) => {

message.guild.members.map(m => m.sendMessage(`${args}`))
};