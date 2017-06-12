const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("Reddit Tech", "https://cdn.discordapp.com/icons/298126646957965313/f6796e5e09c4f7dfb1ee67a0196ecc40.jpg")
.setDescription("Are you interested in technology? Want to discuss your PC build with others, or anything else tech related? Just want to hang out with fellow PCMasterRace people? Then Reddit Tech is the place for you!")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/WS5DadN")
message.channel.send({embed})
}