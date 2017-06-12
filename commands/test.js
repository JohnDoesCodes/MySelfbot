const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("GamerHub", "https://cdn.discordapp.com/icons/298684497581572097/2c6f8db9bcef16178d9ae4fb4d0dbd82.jpg")
.setDescription("Need a place to chill, talk ,game and make youtube videos? Well you should join #PomfCraft! This server is an flabbergasting way to chill and meet new people :family_mmg: !\nWe also have an amazing bot made by a developer named FrogBot :frog: , FrogBot can do many cool commands + has nsfw commands!")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/RfzuBtw")
message.channel.send({embed})
}