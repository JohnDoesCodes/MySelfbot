const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("ChillHub", "https://images-ext-1.discordapp.net/external/cxvgY6gPY5S4WwRV5kG21txff7sIovK_ASDWPi_nF68/https/cdn.discordapp.com/attachments/315878625071333376/318001270424076300/logo2.png")
.setDescription("Need a place to get away and must hangout? Come and join ChillHub a great way to relax and meet new people. Come join us and play games and have generaly random discussions with other chill people.")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/PjY5xVc")
message.channel.send({embed})
}