const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("Gamers House", "https://cdn.discordapp.com/icons/319618947894738961/0d68594fffa6459599cc31ee3af600ad.jpg")
.setDescription("Welcome to Gamers House! We have things such as: > Friendly staff > Cool bots like Tatsumaki and Dyno! > and we allow advertising in our very own advertising channel! > we play a variety of games, on platforms such as steam, as well as playing mobile games too! > we partner with other servers, and we have 100+ members!  Come join!")
.setColor(randomcolor())
.addField("Server Invite", "  https://discord.gg/dPDXZpg")
message.channel.send({embed})
}