const Discord = require("discord.js");
exports.run = (client, message, args) => {
  var firstMention = message.guild.member(message.mentions.users.first());
  if (message.mentions.users.size === 0) {
    return message.reply("Mention a user to softban.");
  }
  let reason = message.content.split(" ").splice(2, 30).join(" ");
  if (!firstMention) {
    return message.reply("Please include a user to ban.");
  }
  if (!reason) {
    return message.reply("Please include a reason.");
  }
  if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
    return message.channel.send("`ERROR:` I do not have permission to ban.");
  }
  firstMention.ban(1).then(member => {
    message.guild.unban(firstMention);
    message.delete();
    var embed = new Discord.RichEmbed();
    embed.setAuthor(`Soft-banned`, ` `)
    .setColor("#FF000A")
    .setDescription(`${user.username}`, true)
    .setThumbnail(`${user.avatarURL}`)
    .setTimestamp()
    .addField('Guild In', `${message.guild.name}`, true)
    .addField('Reason', `${reason}`, true)
    user.sendEmbed(embed, {
      disableEveryone: true
    });
    message.channel.send(`***${user.username} has been soft-banned.***`)
    var embed = new Discord.RichEmbed();
    embed.setAuthor(`Moderator`, ` `)
    .setColor("#FF000A")
    .setDescription(`${message.author.username}`, true)
    .setThumbnail(`${user.avatarURL}`)
    .setTimestamp()
    .addField('User Soft-banned', `${user.username}`, true).addField('Reason', `${reason}`, true)
    message.guild.channels.find('name', 'mod-log').sendEmbed(embed, {
      disableEveryone: true
    });
  });
};
