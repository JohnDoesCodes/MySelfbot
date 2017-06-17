const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("Gamers House", "https://cdn.discordapp.com/icons/319618947894738961/0d68594fffa6459599cc31ee3af600ad.jpg")
.setDescription("> Cool bots like Tatsumaki and Dyno!\n> and we allow advertising in our very own advertising channel!\n> we play a variety of games, on platforms such as steam, as well as playing mobile games too!\n> we partner with other servers, and we have 100+ members!\nWe have things such as:\n[> Friendly staff.Come .join!")
.addField("Server Invite", "https://discord.gg/dPDXZpg")
.setColor(randomcolor())
message.channel.send({embed})
}