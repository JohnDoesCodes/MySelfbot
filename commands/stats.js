const Discord = require("discord.js");
exports.run = (client, message, args) => {
    message.delete()
            var moment = require('moment')
        var embed = new Discord.RichEmbed();
        embed.setColor("#FF0000")
            .setAuthor('aeris#9897', ' ')
            .setThumbnail(`https://cdn.discordapp.com/attachments/248014822082347008/310820438454566913/nerd.jpg`)
            .setTimestamp()
            .addField('> Uptime', (Math.round(client.uptime / (1000 * 60 * 60))) + " hours, " + (Math.round(client.uptime / (1000 * 60)) % 60) + " minutes, and " + (Math.round(client.uptime / 1000) % 60) + " seconds")
            .addField('> General Stats', `• Servers: ${client.guilds.size}\n• Channels: ${client.channels.size}\n• Users: ${client.users.size}`, true)
            .addField('> Working on', `• New Pando\'s commands, click this [Link to join](https://discord.gg/dfdvArY)`)
            .addField('> Update', '• More commands')
        message.channel.sendEmbed(
            embed, {
                disableEveryone: true
            }
        );
};
// https://cdn.discordapp.com/attachments/248014822082347008/310820438454566913/nerd.jpg