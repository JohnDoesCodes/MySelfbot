<<<<<<< HEAD
const Discord = require("discord.js");
exports.run = (client, message, args) => {
  var user = message.mentions.users.first();
  var member = message.guild.member(user);
  var reason = message.content.split(' ').slice(2).join(' ');
  if (!user) return message.channel.send('Please include a user to kick.');
  if (!reason) return message.channel.send('Please include a reason.');
  if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
    return message.channel.send("`ERROR:` I do not have permission to kick.");
  }
  member.kick().then(() => {
    var embed = new Discord.RichEmbed();
    embed.setAuthor(`Kicked`, ` `)
    .setColor("#B5E02C")
    .setDescription(`${user.username}`, true)
    .setThumbnail(`${user.avatarURL}`)
    .setTimestamp().addField('Guild In',`${message.guild.name}`, true)
    .addField('Reason', `${reason}`, true)
    user.sendEmbed(embed, {
      disableEveryone: true
    });
    message.channel.send(`***${user.username} has been kicked.***`)
    var embed = new Discord.RichEmbed();
    embed.setAuthor(`Moderator`, ` `)
    .setColor("#B5E02C")
    .setDescription(`${message.author.username}`, true)
    .setThumbnail(`${user.avatarURL}`)
    .setTimestamp()
    .addField('User Kicked', `${user.username}`, true)
    .addField('Reason', `${reason}`, true)
    message.guild.channels.find('name', 'mod-log').sendEmbed(embed, {
      disableEveryone: true
    });
  });
};
=======
const Discord = require("discord.js");
exports.run = (client, message, args) => {
  var user = message.mentions.users.first();
  var member = message.guild.member(user);
  var reason = message.content.split(' ').slice(2).join(' ');
  if (!user) return message.channel.send('Please include a user to kick.');
  if (!reason) return message.channel.send('Please include a reason.');
  if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
    return message.channel.send("`ERROR:` I do not have permission to kick.");
  }
  member.kick().then(() => {
    var embed = new Discord.RichEmbed();
    embed.setAuthor(`Kicked`, ` `)
    .setColor("#B5E02C")
    .setDescription(`${user.username}`, true)
    .setThumbnail(`${user.avatarURL}`)
    .setTimestamp().addField('Guild In',`${message.guild.name}`, true)
    .addField('Reason', `${reason}`, true)
    user.sendEmbed(embed, {
      disableEveryone: true
    });
    message.channel.send(`***${user.username} has been kicked.***`)
    var embed = new Discord.RichEmbed();
    embed.setAuthor(`Moderator`, ` `)
    .setColor("#B5E02C")
    .setDescription(`${message.author.username}`, true)
    .setThumbnail(`${user.avatarURL}`)
    .setTimestamp()
    .addField('User Kicked', `${user.username}`, true)
    .addField('Reason', `${reason}`, true)
    message.guild.channels.find('name', 'mod-log').sendEmbed(embed, {
      disableEveryone: true
    });
  });
};
>>>>>>> 68ae12d4ee819ce73c724b65761a3ab583bfc44a
