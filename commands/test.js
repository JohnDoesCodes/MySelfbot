const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("Lilium Ent", "https://cdn.discordapp.com/icons/309758424487559178/4b6d6dc043cf8ed2616d2070d9dee570.jpg")
.setDescription("A server dedicated to lesbian themed media; animation and comics (Manga/Manhwa/Manhua), games, movies and other means of entertainment. We may focus on this genre, but we have a lot more things: Waifus, Grambling, RPG, Roleplay, Gaming, ETC! Oh! And we also have radioactive cookies.")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/mhwrw6R")
message.channel.send({embed})
}