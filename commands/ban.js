const Discord = require("discord.js");
exports.run = (client, message, args) => {
  var user = message.mentions.users.first();
  var member = message.guild.member(user);
  var reason = message.content.split(' ').slice(2).join(' ');
  if (!user) return message.channel.send('Please include a user to ban.');
  if (!reason) return message.channel.send('Please include a reason.');
  if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
    return message.channel.send("`ERROR:` I do not have permission to ban.");
  }
  member.ban().then(() => {
    var embed = new Discord.RichEmbed();
    embed.setAuthor(`Banned`, ` `)
    .setColor("#FF000A")
    .setDescription(`${user.username}`, true)
    .setThumbnail(`${user.avatarURL}`)
    .setTimestamp().addField('Guild In',`${message.guild.name}`, true)
    .addField('Reason', `${reason}`, true)
    user.sendEmbed(embed, {
      disableEveryone: true
    });
    message.channel.send(`***${user.username} has been banned.***`)
    var embed = new Discord.RichEmbed();
    embed.setAuthor(`Moderator`, ` `)
    .setColor("#FF000A")
    .setDescription(`${message.author.username}`, true)
    .setThumbnail(`${user.avatarURL}`)
    .setTimestamp()
    .addField('User Warned', `${user.username}`, true)
    .addField('Reason', `${reason}`, true)
    message.guild.channels.find('name', 'mod-log').sendEmbed(embed, {
      disableEveryone: true
    });
  });
};
