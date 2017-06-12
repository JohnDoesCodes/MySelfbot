const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("Reddit Tech", "https://cdn.discordapp.com/attachments/309681105202708481/319665788661399552/banner.png")
.setDescription("Are you interested in technology? Want to discuss your PC build with others, or anything else tech related? Just want to hang out with fellow PCMasterRace people? Then Reddit Tech is the place for you!")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/WS5DadN")
message.channel.send({embed})
}