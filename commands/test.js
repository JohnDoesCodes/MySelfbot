const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("Popo's Bedroom", "https://cdn.discordapp.com/icons/303024884764770304/30402376e58f0d55854467fa9ce63251.jpg")
.setDescription("We are an Anime server that enjoy all types of animes, but we are mainly based on Dragon Ball.\nWe do events such as Dragon ball RP and stream games together, and watch Dragon ball Super together every Saturday Night.\nWe do talk about anything that may interest you in any way, so please come along and enjoy yourself.")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/ZcHAXwf")
message.channel.send({embed})
}