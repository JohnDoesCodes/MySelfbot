const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("Night Sanity 2.0", "https://cdn.discordapp.com/icons/321240840209039370/d6fcb3b09855e980cca70fcb5e2deb00.jpg")
.setDescription("Hello and Welcome to (Night Sanity 2.0) Discord Server.\n- We're are starting off fresh and new.  This is a FULLY (NSFW,Gaming,Socialize)server. This server is split into 3 full servers meaning you ma choose ful nsfw,gamin or socialize. We have all sorts of channels. We have few voice chats also do it yourself bots to help you learn about the server. We also do Giveaways, you can view that in the do it yourself bot. We plan to grow big within few days as i will be regathering from my old server.")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/nV3DCSH")
message.channel.send({embed})
}