const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("Snail Racing", "https://cdn.discordapp.com/icons/204621105720328193/6c44c0fcd3aa3864e77a66112584f99d.jpg")
.setDescription("Snail Racing is a Discord bot which allows you to run exciting races with people in your server, collect neat items, soar server item and level leaderboards, hoard rupees and earn admin-assigned roles. Watch out for traps and beat your server's members in snail races!")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/ZB82NjS")
.addField("Bot Invite", "https://discordapp.com/oauth2/authorize?client_id=256556410031046657&scope=bot&permissions=19457")
message.channel.send({embed})
}