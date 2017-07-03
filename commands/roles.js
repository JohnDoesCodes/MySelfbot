<<<<<<< HEAD
const Discord = require("discord.js");
exports.run = (client, message, args) => {
  var embed = new Discord.RichEmbed();
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) {
    return message.channel.send("`ERROR:` I do not have permission to send Embed, contact administrator to get perm to send embed.");
  }
  let roles = message.guild.roles.array().join(' | ');
  message.delete()
  embed.setAuthor(`${message.author.tag} Selfbot | Guild roles`, client.user.displayAvatarURL)
  .setDescription(roles)
  .setColor("#53A6F3")
  .setFooter(`There are ${message.guild.roles.filter(r => r.name).size} roles in ${message.guild.name}`)
  message.channel.send({embed}).catch((err) => {message.channel.send(`:warning: **An error occurred.**\n${err}`); console.log(err)});
}
=======
const Discord = require("discord.js");
exports.run = (client, message, args) => {
  var embed = new Discord.RichEmbed();
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) {
    return message.channel.send("`ERROR:` I do not have permission to send Embed, contact administrator to get perm to send embed.");
  }
  let roles = message.guild.roles.array().join(' | ');
  message.delete()
  embed.setAuthor(`${message.author.tag} Selfbot | Guild roles`, client.user.displayAvatarURL)
  .setDescription(roles)
  .setColor("#53A6F3")
  .setFooter(`There are ${message.guild.roles.filter(r => r.name).size} roles in ${message.guild.name}`)
  message.channel.send({embed}).catch((err) => {message.channel.send(`:warning: **An error occurred.**\n${err}`); console.log(err)});
}
>>>>>>> 68ae12d4ee819ce73c724b65761a3ab583bfc44a
