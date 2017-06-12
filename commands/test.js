const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("Discord Donuts")
.setDescription("Are you hungry? Order some Discord Donuts. They arrive within 5 minutes order some today!")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/4J7X8x3")
message.channel.send({embed})
}