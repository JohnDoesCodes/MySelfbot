const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("Rasberry Pie", "https://cdn.discordapp.com/icons/204621105720328193/6c44c0fcd3aa3864e77a66112584f99d.jpg")
.setDescription("Raspberry Pi is a programming and tech discussion server. Join in and talk about anything from programming, to hardware, to games with over 1,700 members!")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/rQGMDJJ")
message.channel.send({embed})
}