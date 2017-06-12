const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("The Gay Squad!", "https://cdn.discordapp.com/icons/289482819347152896/b6bfe4e1bde7dd9411cd4039a13e4c2f.jpg")
.setDescription("**__A place to be gay (or not) and enjoy the company of others!__**\n\nHere at the Gay Squad we have lots of events and a loving community!\nYou don't need to be gay to join, of course, so don't be scared!\n\nCome join us at the Gay Squad, you won't regret it! (:")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/mxxbg8E")
message.channel.send({embed})
}