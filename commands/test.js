const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor(" Pancake", "https://cdn.discordapp.com/icons/236902633430974464/23738724ab8eec30395a09a43551813f.jpg")
.setDescription("is your server lacking fun? are you looking for something to keep you entertained for hours? then this bot is for you! Pancake is a cool fun bot that has so many features to keep you and your members entertained in your server. Not only does pancake provide entertainment, but you can also use it to moderate your server! Pancake always has updates for quality or more commands. We also love some feedback and some command suggestions. Are you interested yet? come and check it out here: ")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/DwNYNPz")
.addField("Bot Invite", "https://discordapp.com/oauth2/authorize?=&client_id=239631525350604801&scope=bot&permissions=301001751")
message.channel.send({embed})
}