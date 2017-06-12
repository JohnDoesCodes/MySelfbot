const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("Official Chips Server", "https://cdn.discordapp.com/avatars/296855425255473154/753c765c7b7c99cb5f6ddaeb65afbc28.png")
.setDescription("Stay updated with the Chips bot here! Have a little bit of fun! Stay in contact with the Support team and Developer team!")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/jj5FzF7")
message.channel.send({embed})
}