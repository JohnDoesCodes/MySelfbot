const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("The Midnight Afterparty", "https://cdn.discordapp.com/icons/301398963192594432/724f45c829cfe81397e22b8a5b75745d.jpg")
.setDescription("The Midnight Afterparty is dedicated to events such as karaoke/tournaments for various games. We are a group aiming to be a chill server where friends can enjoy our events aswell as talk to each other while fostering with other communities,We also do GFX Clashes for all those artists out ther, we also welcome all partnerships if they meet our requirements,so if you'd like to help, make sure to join:")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/fC3vbQt", true)
.addField("Website", "http://themidnightafterparty.tk/", true)
message.channel.send({embed})
}