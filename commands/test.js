const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("LGBTQ", "https://cdn.discordapp.com/icons/310157548244434947/c182a0438e1763cf98d1aafc2ea0e453.jpg")
.setDescription("We welcome everyone, of every race, and gender. We do not judge, you are safe here. We support all sexualalities and interests. Come join today and make some friends!")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/AkeFgEa")
message.channel.send({embed})
}