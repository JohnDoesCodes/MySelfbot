const Discord = require("discord.js");
exports.run = (client, message, args) => {
var embed = new Discord.RichEmbed();
let roles = message.guild.roles.array().join('\n');
message.delete()
embed.setAuthor(`${message.author.tag} Selfbot | Guild roles`, client.user.displayAvatarURL)
.setDescription(roles)
.setColor("#53A6F3")
.setFooter(`There are ${message.guild.roles.filter(r => r.name).size} roles in ${message.guild.name}`)
message.channel.send({embed})
}
