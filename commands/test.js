const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("Ascension - Anime & Gaming", "https://cdn.discordapp.com/icons/315826908212232194/17761254284fe00979f99f5b899d55ce.jpg")
.setDescription("The greatest discord group for Otakus. We want all of the anime/manga/jpop or etc. lovers to unite in one place.\nBy the way, if you want to have a role on our server, always be active on our chatroom. Mee6, a bot responsible for leveling people up, shall appear to let you know what level you are.")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/ZKWsdBY")
message.channel.send({embed})
}