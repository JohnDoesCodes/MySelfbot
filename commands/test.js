const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("The Phoenix Circle ", "https://cdn.discordapp.com/icons/284202358802612225/896c252efc4741cf2035e8a3a3db6d71.jpg")
.setDescription("Its the place for everyone ! Lets grow our community globally , making friends from corners , enjoying with each other ! Gaming , movies , anime , animal lovers , music etc. everything goes here ! It got cool bots too ! Also has a server bank :P Join the circle now!")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/RzSn9G9")
message.channel.send({embed})
}