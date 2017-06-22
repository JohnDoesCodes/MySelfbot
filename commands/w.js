const Discord = require("discord.js");
exports.run = (client, message, args) => {
  message.delete()
 var mention = message.mentions.users.first();
 if(message.mentions.users.size === 0) {
return message.channel.send("\`?\` | Please mention a user.")
 }
  var embed = new Discord.RichEmbed();
  var moment = require('moment')
  embed.addField("> Member Details", `• Name: ${mention.username}\n• Discrim: #${mention.discriminator}\n• User ID: ${mention.id}\n• Game: ${mention.presence.game === null ? "No Game" : mention.presence.game.name}\n• Joined at: ${moment(mention.joinedAt).format('ddd MMM Do YYYY')}`)
  .addField('> User Details', `• Status: ${mention.presence.status}\n• Joined Discord: ${moment(mention.createdAt).format('ddd MMM Do YYYY')}`)
  .setColor("#53A6F3")
  .setFooter(' ', ' ')
  .setThumbnail(`${mention.avatarURL}`)//`${message.guild.iconURL}`
  .setTimestamp()
  .setURL(`${mention.avatarURL}`)
message.channel.sendEmbed(
  embed,
  { disableEveryone: true }
);
};
