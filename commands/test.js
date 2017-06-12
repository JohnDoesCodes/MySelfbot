const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("Waifus Kingdom", "https://cdn.discordapp.com/icons/303929603611820033/0b1016440c11098d38d6e3bc62d797e7.jpg")
.setDescription("A place to feel at peace with the ways of the weaboo, A chill and entertaining community, as Well as local Waifu galleries to keep your laifu  away from the waifu")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/Qr3AZU6")
message.channel.send({embed})
}