const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("United Pals", "https://cdn.discordapp.com/icons/284202358802612225/896c252efc4741cf2035e8a3a3db6d71.jpg")
.setDescription("One of the most friendly, active and amazing discords out there! We have 200+ members and more friendly people come every single day :smile: Join now to become a part of this amazing community!")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/FASThWq")
message.channel.send({embed})
}