const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("Discord News", "https://cdn.discordapp.com/icons/310477556015038465/b2478ee0ea497c4cade06c65cb79b92a.jpg")
.setDescription("Discord News is a server dedicated to bring you the latest Discord news as soon as it happens! We have a weekly newspaper with articles about Discord as well as a website which will post news as soon as it happens! Join our server now at https://discord.gg/NqYzzdv and check out our website at https://discordnews.ml/")
.setColor(randomcolor)
message.channel.send({embed})
}