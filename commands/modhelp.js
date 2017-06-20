const Discord = require("discord.js");
exports.run = (client, message, args) => {
    message.delete()
  var embed = new Discord.RichEmbed();
  embed.setAuthor('Commands | Message will self disrupt in 30 seconds', `${message.author.displayAvatarURL}`)
  .addField('Moderation', '[selfban](https://discord.gg/dfdvArY) - Ban a user.\n[selfsoftban](https://discord.gg/dfdvArY) - softban a user.\n[selfkick](https://discord.gg/dfdvArY) - Kick a user.\n[selfwarn](https://discord.gg/dfdvArY) - Warn a user.\n[selfmute](https://discord.gg/dfdvArY) - Mute a user.\n[selfunmute](https://discord.gg/dfdvArY) - Unmute a muted user.\n[selfunban](https://discord.gg/dfdvArY) - Unban a user.\n[selfprune](https://discord.gg/dfdvArY) - Purge messages.\n[selfclear](https://discord.gg/dfdvArY) - Clear own message.')
  .setColor("#53A6F3")
  message.channel.sendEmbed( 
            embed, {
                disableEveryone: true
            }
        ).then(message => message.delete(30000));
}
