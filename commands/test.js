const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("Kaos Krew", "https://cdn.discordapp.com/icons/310192676479959041/31e550fdac36ed0102fec739fd1cc0a2.jpg")
.setDescription("Kaos Krew is a multi-platformed Gaming Community server with channels for everyone! We host Team Games aswell as events! Here you can meet new people, listen to music, discuss your favorite games, team up, and chill!")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/mxxbg8E")
message.channel.send({embed})
}