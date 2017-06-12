const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("G/MATS", "https://cdn.discordapp.com/icons/303929603611820033/0b1016440c11098d38d6e3bc62d797e7.jpg")
.setDescription("There is also much more like Shared Origin, Uplay & Steam accounts. As well as a weekly give-away of 1 free Activation of Denuvo games!")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/T6N2jB9")
message.channel.send({embed})
}