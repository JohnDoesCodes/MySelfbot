const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("The Chilled /D/iscord", "https://cdn.discordapp.com/attachments/304323891445104651/314592211188842496/test2.png")
.setDescription("The Chilled /D/iscord is a community of a multitude of gamers from different games. Come together to laugh, share and enjoy music, involve yourself in activities of what the staff would organize, as well as share gaming techniques for a lot of games. This server was meant to be for all ages, but it has been decided for those who are mature enough to not get offended at a lot of 'seemingly' offensive topics.")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/f6USW3B ")
message.channel.send({embed})
}