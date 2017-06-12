const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("Reddit Tech", "https://images-ext-2.discordapp.net/external/laGOvfo3YTh8PPJIi64WyuYN81oX5_kaOl5wgyzDOxo/%3Fwidth%3D400%26height%3D225/https/images-ext-1.discordapp.net/eyJ1cmwiOiJodHRwOi8vaS5pbWd1ci5jb20vRWtwdDJXZS5qcGcifQ.BphR19YvBs7cOK5nmptR6Tl6fF0?width=300&height=169")
.setDescription("Tarik's Discord is a community owned by !TTxFTW#1227 aka Tarik. We don't have a specific topic. We focus on pretty much everything, from gaming to coding to NSFW and shit posting!. You can unlock a channel for a specific topic or apply for free roles. We are also known for our special bot called Tarik,(which was actually made just for this server, but randomly blew up with fame). Our server also has an economy system ran by our bot. How it works is: you earn credits in the casino, taking part in heists with other users, participating in lotteries and much more. You can type .payday to earn hourly credits. With these credits, you can buy items or roles. You can type .buyrole to view our role shop. Officially Partnered with Discord!")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/tarik")
message.channel.send({embed})
}