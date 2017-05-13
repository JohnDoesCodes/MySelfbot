const Discord = require("discord.js");
exports.run = (client, message, args) => {
  message.delete()
        var embed = new Discord.RichEmbed();
    var moment = require('moment')
    embed.addField("> Member Details", `• Name: ${message.author.username}\n• Discrim: #${message.author.discriminator}\n• ID: ${message.author.id}\n• Roles: ${message.member.roles.filter(r => {return r.name != '@everyone'}).map(r => r.name).join(', ')}\n• Joined at: ${moment(message.author.joinedAt).format('ddd MMM Do YYYY')}`, true)
    .addField('> User Details', `• Status: ${message.author.presence.status}\n• Game: ${message.author.presence.game === null ? "No Game" : message.author.presence.game.name}\n• Joined Discord: ${moment(message.author.createdAt).format('ddd MMM Do YYYY')}`, true)
    .setColor("#53A6F3")
    .setFooter(' ', ' ')
    .setThumbnail(`${message.author.avatarURL}`)//`${message.guild.iconURL}`
    .setTimestamp()
    .setURL(`${message.author.avatarURL}`)
  message.channel.sendEmbed(
    embed,
    { disableEveryone: true }
  );
};