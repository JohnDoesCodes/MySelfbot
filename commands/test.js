const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("ChillZone", "https://cdn.discordapp.com/attachments/309681105202708481/310316813831634945/nab.png.jpg")
.setDescription("A rapidly growing place to chill, meet new friends, and have fun. Everybody is welcome!")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/Qurr9Gv")
message.channel.send({embed})
}