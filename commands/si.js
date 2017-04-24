const Discord = require("discord.js");
exports.run = (client, message, args) => {
        var embed = new Discord.RichEmbed();
    var moment = require('moment')
    embed.addField("> Server Info", `• Server name: ${message.guild.name}\n• Server ID: ${message.guild.id}\n• Owner: ${message.guild.owner.user.username}\n• Owner ID: ${message.guild.owner.id}\n• ${message.guild.memberCount} Members`, true)
        .addField('> Other', `• ${message.guild.roles.filter(r => r.name).size} roles\n• Region: ${message.guild.region}\n• ${message.guild.channels.filter(r => r.name).size} channels total count\n• Guild Created: ${moment(message.guild.createdAt).format('ddd MMM Do YYYY')}\n• Verification Level: ${message.guild.verificationLevel}`, true)
        .setColor("#EEFD3F")
		.setFooter(' ', ' ')
        .setThumbnail(`${message.guild.iconURL}`) //`${message.guild.iconURL}`
        .setTimestamp()
        .setURL(`${message.author.avatarURL}`)
    message.channel.sendEmbed(
        embed, {
            disableEveryone: true
        }
    );
};