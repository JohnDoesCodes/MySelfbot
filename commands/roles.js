const Discord = require("discord.js");
exports.run = (client, message, args) => {
var embed = new Discord.RichEmbed();
let roles = message.guild.roles.map(r => r.name).join(',')
message.delete()
embed.setAuthor(`${message.author.tag} Selfbot | Guild roles`, client.user.displayAvatarURL)
.setDescription(roles)
message.channel.send({embed})
}