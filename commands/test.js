const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("Chicks and Mix", "https://cdn.discordapp.com/icons/285391576417566721/1410b49f343cb2f24cd273dfe1a017f1.jpg")
.setDescription("Hello and welcome! Chicks & Mix is fun and harmonious hangout originally created for chicks but to enjoy a good balance, we have opened our doors to create a mix. Ladies are chicks and gentlemen are mix. Please make yourself comfortable and have a fun and enjoyable time here.")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/2qg34Hn")
message.channel.send({embed})
}