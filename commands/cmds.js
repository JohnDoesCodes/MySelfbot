const Discord = require("discord.js");
exports.run = (client, message, args) => {
//     if (!message.guild || !message.member) return;
//    message.channel.sendMessage(
//    '```asciidoc' +
//    '\n= Moderation Commands =' +
//    '\nselfprune        :: selfprune used to clear anywhere to 1-100 messages' +
//    '\nselfclear        :: selfclear used to clear own message to 1-100 messages' +
//    '\nselfgm           :: selfgm used to mass messages on a server' +
//    '\nselfrestart      :: selfrestart used to restart. ' +
//    '\nselfsearch       :: selfsearch used to searches a number of messages for some text' +
//    '\nselfsoftban      :: selfsoftban <@user>  <reason required> used to softban user\'s' +
//    '\nselfwarn         :: selfwarn <@user> <reason required> used to warn people' +
//    '\nselfban          :: selfban <@user>  <reason required> used to ban users' +
//    '\nselfunban        :: selfunban <@user> <reason required> used to unban users' +
//    '\nselfkick         :: selfkick <@user>  <reason required> used to kick users' +
//    '\nselfreload       :: selfreload used to reload the bot by Developer (Owner)' +
//    '\nselfeval         :: selfeval used for Owner only```'
//    );
// };


  var embed = new Discord.RichEmbed();
  embed.setAuthor('Commands', `${message.author.displayAvatarURL}`)
  .addField('Moderation', '[selfban](https://discord.gg/dfdvArY) - Ban a user.\n[selfsoftban](https://discord.gg/dfdvArY) - softban a user.\n[selfkick](https://discord.gg/dfdvArY) - Kick a user.\n[selfwarn](https://discord.gg/dfdvArY) - Warn a user.\n[selfmute](https://discord.gg/dfdvArY) - Mute a user.\n[selfunmute](https://discord.gg/dfdvArY) - Unmute a muted user.\n[selfunban](https://discord.gg/dfdvArY) - Unban a user.\n[selfprune](https://discord.gg/dfdvArY) - Purge messages.\n[selfclear](https://discord.gg/dfdvArY) - Clear own message.')
  .addField('Misc', '[selfsource](https://discord.gg/dfdvArY) - Selfbot source code.\n[selfbots](https://discord.gg/dfdvArY) - Bot supports.\n[selfsearch](https://discord.gg/dfdvArY) - Search message.\n[selfping](https://discord.gg/dfdvArY) - Check if selfbot is alive/latency.\n[selfsbinfo](https://discord.gg/dfdvArY) - FAQ about selfbots.\n[selfcasb](https://discord.gg/dfdvArY) - Creating a selfbot.\n[selfshowcodes](https://discord.gg/dfdvArY) - Show all codes.\n[selftoken](https://discord.gg/dfdvArY) - Info on user token.\n[selfpp](https://discord.gg/dfdvArY) - 8 lang how to save the princess.\n[selfvac](https://discord.gg/dfdvArY) - Vacation.\n[selflearnjs](https://discord.gg/dfdvArY) - Show useful link\'s on learning js.\n[selflinks](https://discord.gg/dfdvArY) - Show\'s my social media site and server.\n[selfstats](https://discord.gg/dfdvArY) - Show selfbot stats.\n[selffriend](https://discord.gg/dfdvArY) - Add friend a user\n[selfunfriend](https://discord.gg/dfdvArY) - Unfriend a user.\n[selfblock](https://discord.gg/dfdvArY) - Block a user.\n[selfunblock](https://discord.gg/dfdvArY) - Unblock a user.\n[selfquote](https://discord.gg/dfdvArY) - Quote a message.\n[selfinfo](https://discord.gg/dfdvArY) - Show userinfo.\n[selfw](https://discord.gg/dfdvArY) - Show\'s user\'s info.\n[selfsi](https://discord.gg/dfdvArY) - Server info\n[selfembed](https://discord.gg/dfdvArY) - Text embed.\n[selfavi](https://discord.gg/dfdvArY) - Show current avatar.\n[selfget](https://discord.gg/dfdvArY) - Get user\'s avatar.\n[selfcb](https://discord.gg/dfdvArY) - CodeBlock.')
  .addField('Owner', '[selfeval](https://discord.gg/dfdvArY) - Runs javascript code.\n[selfrestart](https://discord.gg/dfdvArY) - Restart the selfbot.\n[selfgm](https://discord.gg/dfdvArY) - Message members in a server.')
  message.author.sendEmbed(
            embed, {
                disableEveryone: true
            }
        ); {
          message.react("📬")
        }
}
