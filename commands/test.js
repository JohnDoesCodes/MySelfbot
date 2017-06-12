const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("My Chemical Piløts at the Disco with Fall Out Boys", "https://cdn.discordapp.com/icons/299942051636576257/91f47be29dafd0a9d75e1d12713cebf4.jpg")
.setDescription("We are a gr8 community server based on all sorts off topics, We have multiple channels and roles for you to enjoy, and have friendly staff, enough rooms to talk about everything you want, and we’re always open for suggestions and how to improve our server. Click The Link! Link to discord ")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/8m8yRf3")
message.channel.send({embed})
}