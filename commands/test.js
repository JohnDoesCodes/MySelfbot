const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("ChillZone", "https://cdn.discordapp.com/icons/219564597349318656/482922f8c6b9121069eaa442cfec2da8.jpg")
.setDescription("A rapidly growing place to chill, meet new friends, and have fun. Everybody is welcome!")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/Qurr9Gv")
message.channel.send({embed})
}