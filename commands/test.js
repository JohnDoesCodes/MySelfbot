const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("/r/Overwatch_Memes", "https://cdn.discordapp.com/icons/292932955653931009/81c10c3728d08c8651991fa621f676cb.jpg")
.setDescription("Do you love overwatch and dank memes? Well, /r/Overwatch_Memes is here providing some of the dank memes for you. We hit 50K readers and also 100+ members on discord on the first day of the Overwatch Anniversary! ")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/ow")
message.channel.send({embed})
}