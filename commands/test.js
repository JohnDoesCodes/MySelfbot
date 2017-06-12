const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("Teens Community", "https://cdn.discordapp.com/icons/306433739959828480/30b48cff2cd9fd66e7ed1329540c8b33.jpg")
.setDescription("Hello and welcome to the teens community! :smiley: We hope you enjoy this server! Our main goal is to make this a server were everyone can have fun, socialize, meet others, talk to other teens who are going through the same things as you may be going through, support one another, and be crazy without regretting it :joy: We host plenty of events and have streams on Fridays. Come get in on the fun!")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/zyAHdaJ")
message.channel.send({embed})
}