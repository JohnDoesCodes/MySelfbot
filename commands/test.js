const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("Coyote Cave | Coding HQ", "https://cdn.discordapp.com/icons/307230826545020928/f90e18ea95f15a955f30ba91a8dba1ba.jpg")
.setDescription("Welcome to Coyote Cave | Coding HQ this is a chat for all coders around the world and a simple chat as well for my bot @Coyote | @CoyoteBeta.")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/CYusa2Y")
message.channel.send({embed})
}