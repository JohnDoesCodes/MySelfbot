const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("ProCSS", "https://cdn.discordapp.com/attachments/309681105202708481/322368462276001793/ProCSS.png")
.setDescription("The Discord for r/ProCSS, which is for moderators and subreddits who are in support of continued CSS use on Reddit.")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/Ym85STk")
message.channel.send({embed})
}