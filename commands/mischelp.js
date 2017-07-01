const Discord = require("discord.js");
exports.run = (client, message, args) => {
    message.delete()
  var embed = new Discord.RichEmbed();
  embed.setAuthor('Commands | Message will self disrupt in 30 seconds', `${message.author.displayAvatarURL}`)
  .addField('Misc', '[selfbots](https://discord.gg/dfdvArY) - Bot supports.\n[selfdiscrim](https://discord.gg/dfdvArY) - Discrim search.\n[selfinvert](https://discord.gg/dfdvArY) - Invert a picture.\n[selfblur](https://discord.gg/dfdvArY) - Blur a picture.\n[selfping](https://discord.gg/dfdvArY) - Check if selfbot is alive/latency.\n[selfvac](https://discord.gg/dfdvArY) - Vacation.\n[selflearnjs](https://discord.gg/dfdvArY) - Show useful link\'s on learning js.\n[selfstats](https://discord.gg/dfdvArY) - Show selfbot stats.\n[selfinfo](https://discord.gg/dfdvArY) - Show userinfo.\n[selfw](https://discord.gg/dfdvArY) - Show\'s user\'s info.\n[selfsi](https://discord.gg/dfdvArY) - Server info\n[selfembed](https://discord.gg/dfdvArY) - Text embed.\n[selfavi](https://discord.gg/dfdvArY) - Show current avatar.\n[selfget](https://discord.gg/dfdvArY) - Get user\'s avatar.\n[selffml](https://discord.gg/dfdvArY) - Fucc my life.\n[selfb1nzy](https://discord.gg/dfdvArY) - B1nzy ban.')
  .setColor("#53A6F3")
  message.channel.sendEmbed(
            embed, {
                disableEveryone: true
            }
        ).then(message => message.delete(30000));
}
