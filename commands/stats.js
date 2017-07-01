const Discord = require("discord.js");
exports.run = (client, message, args) => {
  message.delete()
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) {
    return message.channel.send("`ERROR:` I do not have permission to send Embed, contact administrator to get perm to send embed.");
  }
  var moment = require('moment')
  var embed = new Discord.RichEmbed();
  embed.setColor("#53A6F3")
  .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL}`)
  // .setThumbnail(`${client.user.avatarURL}`)
  .setTimestamp()
  .addField('> Uptime', (Math.round(client.uptime / (1000 * 60 * 60))) + " hours, " + (Math.round(client.uptime / (1000 * 60)) % 60) + " minutes, and " + (Math.round(client.uptime / 1000) % 60) + " seconds")
  .addField('> General Stats', `• Servers: ${client.guilds.size}\n• Channels: ${client.channels.size}\n• Users: ${client.users.size}`, true)
  .addField('> Working on', `• New ModBot\'s commands, click this [Link to join](https://discord.io/aerisdiscord)`)
  .addField('> Update', '• More commands')
  message.channel.sendEmbed(
    embed, {
      disableEveryone: true
    }
  );
};
