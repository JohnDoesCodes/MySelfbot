const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("Available Wrong Chat", "https://cdn.discordapp.com/icons/308776811741839370/6e4f4da6810ae294699b4809bc3f9876.jpg")
.setDescription("Available Wrong Chat is a place to chill and hang out.\nEach role is given to a person based on how active they are with the server.\nYou can self assign roles to yourself with neat titles and what not.\nThe only thing the we won't be lenient with is other server links outside our partnership. \nSo please join and help get this community growing.")
.addField("Server Invite", "https://discord.gg/RHUAhAU")
.setColor(randomcolor())
message.channel.send({embed})
} 