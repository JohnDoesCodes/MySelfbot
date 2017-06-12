const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor(" Atlantis", "https://cdn.discordapp.com/icons/282296936827191306/e2ff5da63db78e4db8139f2851f920f6.jpg")
.setDescription("Growing community, with a friendly enviroment.\nCustom server bot, developed by staff members and the community members.\nEvents like movie night, game night, and much more!!\nOpen for anyone to join, and be themselves.\nFull of all sorts of people (Developers, Artists, Athletes, and more!)")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/CBUDnGw")
message.channel.send({embed})
}