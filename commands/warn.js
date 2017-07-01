const Discord = require("discord.js");
exports.run = (client, message, args) => {
        var reason = message.content.split(' ').slice(2).join(' ');
        var modlog = message.guild.channels.find('name', 'mod-log')
        var user = message.mentions.users.first();
        if (!user) return message.channel.send('Please include a user to warn.');
        if (!reason) return message.channel.send('Please include a reason.');
        var embed = new Discord.RichEmbed();
        embed.setAuthor('Selfbot | Warn', client.user.avatarURL)
        .addField("User:", `${user.tag}`, true)
        .addField('Reason:', reason || "No reason", true)
        .setTimestamp()
        .setColor("#D3AB14")
        message.user.sendEmbed(
          embed,
          { disableEveryone: true }
        );
        message.channel.send(`***${user.username}*** ***Has been warned*** 👌`)
        embed.setAuthor('Selfbot | Warn', client.user.avatarURL)
        .addField("User:", `${user.tag}`, true)
        .addField('Reason:', reason || "No reason", true)
        .setTimestamp()
        .setColor("#D3AB14")
        modlog.sendEmbed(
          embed,
          { disableEveryone: true }
        );
};
