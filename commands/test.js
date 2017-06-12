const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("G/MATS", "https://cdn.discordapp.com/icons/273501028681515008/193b08ec00084239a2c4d632440446e8.jpg")
.setDescription("There is also much more like Shared Origin, Uplay & Steam accounts. As well as a weekly give-away of 1 free Activation of Denuvo games!")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/T6N2jB9")
message.channel.send({embed})
}