const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("Center City", "https://cdn.discordapp.com/attachments/313493871193620481/324745528799657984/5b1d591de52dbc6135f9bfce99d00dc1.png")
.setDescription("Welcome to Center City | Center City is a Role-playing and simulation based game that is currently getting developed and is created by the most amazing developers you can find. This game was designed to simulate real life events and to have fun and roleplay along with your friends. Center City is developed and is using Unity 3D to visualize real life simulation and competes with EmergeNYC. Center City has the best graphics and renderings of the textures inside of the gaming platform. You can even start a Center City self-hosted server and connect your server to Center City's databases.")
.addField("Server Invite", "https://discord.gg/centercity")
.addField("Website", "https://playcentercity.com")
.setColor(randomcolor())
message.channel.send({embed})
} 