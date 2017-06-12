const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("The Onigiri Hub", "https://cdn.discordapp.com/icons/300834407185514496/f65ea54e9f5d1760b4e6fb9f8b099967.jpg")
.setDescription("Welcome to The Onigiri Hub, here we have good customers and have many free roles for each kind of Onigiri. We also have some story tellers who tells different kinds of story, along with brilliant staff members. We have radio bots along with a roleplay and gaming channel. Partnership is offered here, so do join and tell us if you want to be one!")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/PJCMCwV")
message.channel.send({embed})
}