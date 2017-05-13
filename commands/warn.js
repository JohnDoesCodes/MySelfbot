const Discord = require("discord.js");
exports.run = (client, message, args) => {
            var reason = message.content.split(' ').slice(2).join(' ');
        var user = message.mentions.users.first();
        if (!user) return message.channel.sendMessage('Please include a user to warn.');
        if (!reason) return message.channel.sendMessage('Please include a reason.');
        var embed = new Discord.RichEmbed();
        embed.setAuthor(`Warning`, ` `)
        .setColor("#ECC31A")
        .setDescription(`${user.username}`, true)
        .setThumbnail(`${user.avatarURL}`)
        .setTimestamp()
        .addField('Guild In', `${message.guild.name}`,true)
        .addField('Reason', `${reason}`, true)
        user.sendEmbed(embed, {
                disableEveryone: true
        });
        message.channel.sendMessage(`***${user.username}*** ***Has been warned*** 👌`)
        var embed = new Discord.RichEmbed();
        embed.setAuthor(`Moderator`, ` `)
        .setColor("#ECC31A")
        .setDescription(`${message.author.username}`, true)
        .setThumbnail(`${user.avatarURL}`)
        .setTimestamp()
        .addField('User Warned',`${user.username}`, true)
        .addField('Reason', `${reason}`, true)
        message.guild.channels.find('name', 'mod-log').sendEmbed(embed, {
                disableEveryone: true
        });
};