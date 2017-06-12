const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("D4RK Nation", "https://cdn.discordapp.com/icons/296993353135030272/0d066e645c3c4ba444f76315aa7c086c.jpg")
.setDescription("Great community and staff for all your GTA V modding needs we do recoveries and are currently working on a menu our selves . Or if you wanna just talk and chill in our server.\nWe are currently at 500+ users and looking to expand")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/pP6pvcm")
message.channel.send({embed})
}