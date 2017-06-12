const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("Gaming and Chat", "https://cdn.discordapp.com/icons/293062194629705728/71c2169f71729b3a7869cc80374a7561.jpg")
.setDescription("Welcome to my server its a cool server with alot of people to talk with we talk about anything in the server feel free to say anything and play any games you want while interacting with different kinds of people first read the rules and if you have some questions please contact me or the admins.We also have a site in wich we sell steam games in a cheap price if you want to buy a game contact sell idustry admins.\nYou can also post youre lewd pictures at the lewd channels with your favorite NSFW pics!")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/VyMPnz3")
message.channel.send({embed})
}