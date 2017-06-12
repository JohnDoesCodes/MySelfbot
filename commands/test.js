const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("Gamer's Community", "https://cdn.discordapp.com/icons/306485688390647812/50ba7cdae1a9e4072635fe7c5584af33.jpg")
.setDescription("A place to find friends, gamers and other interesting people to get along with.\nWe discuss about anything & everything, there's also cool activities for everyone. \nNeed any help? Well, there's always someone who could help you with whatever you need. \nWe have some of the best youtubers, gamers, developers, graphic designers, music producers and more. \nIf you're interested please feel free to join as we look forward in meeting new people")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/YFXycQZ")
message.channel.send({embed})
}