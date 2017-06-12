const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("Café 0131+", "https://cdn.discordapp.com/icons/188752295108935680/c4bbb927dc5e289371ee54fc92a9a3a3.jpg")
.setDescription("Café 0131+ With a dedicated Minecraft server, a weekly event schedule and occasional talks, it's easy to enjoy us! Join now to let this 500-member server back to its glory! ")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/013MqTM1p1qm52VcZ")
message.channel.send({embed})
}