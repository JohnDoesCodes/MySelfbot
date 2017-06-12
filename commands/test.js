const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("SFG Community", "https://cdn.discordapp.com/icons/257596928450232322/a7a8d3228a0cca8404b3fd2d92010f15.jpg")
.setDescription("SFG Community is a gaming and general server, we allow pretty much anything to be discussed in all different text and voice channels (within rules). It's a welcoming and active community with hundreds of members all with different hobbies and interests.")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/Z9F7Tp4")
message.channel.send({embed})
}