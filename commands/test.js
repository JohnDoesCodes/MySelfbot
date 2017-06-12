const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("Maid Cafe And Smoothie Shop", "https://cdn.discordapp.com/icons/299669140434845697/6abb0e9ca6bbdbf296ae4917bb6fe3ba.jpg")
.setDescription("Chill out at the ever growing Maid Cafe! With fun events, role playing, and a lot of discussions. We are a server for all people, of all ages. This Maid Cafe aims to be one of the most active, growing servers that can be a place for all, free from mod abuse. Join today!")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/Mf6M9MT")
message.channel.send({embed})
}