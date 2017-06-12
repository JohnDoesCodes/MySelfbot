const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("CrackingZone_Gaming", "https://cdn.discordapp.com/icons/283251838877433857/daed1d95fa2e03c1cbfc53d85462ccb5.jpg")
.setDescription("Our Community Offers Uplay, Origin,Steam,Spotify,Netflix,Hulu premium accounts for free!!!\n\nWe also host 2 giveaways daily for our members!!!\n\nYou want more well we also offer direct links to HD movies and latest PC Games!!!!\n\nWe will keep you updated with latest gaming news and PC tech!!!")
.setColor(randomcolor())
.addField("Server Invite", " https://discord.gg/3RajjsF")
message.channel.send({embed})
}