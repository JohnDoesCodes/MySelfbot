const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("Whis 🍜", "https://cdn.discordapp.com/icons/280074405571330049/56fc3b8b638828176577c3ec2cdd0ca4.jpg")
.setDescription("This server is powered up by and handled by ♪ @!♪ Whis Wee ♪:ramen:#7451 , but all final decisions/changes (actually everything) are @!♪ Whis Wee ♪:ramen:#7451 ")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/XuP2sCg")
message.channel.send({embed})
}