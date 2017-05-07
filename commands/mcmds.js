const Discord = require("discord.js");
exports.run = (client, message, args) => {
    if (!message.guild || !message.member) return;
   message.channel.sendMessage(
   '```asciidoc' +
   '\n= Moderation Commands =' +
   '\nselfprune        :: selfprune used to clear anywhere to 1-100 messages' +
   '\nselfgm           :: selfgm used to mass messages on a server' +
   '\nselfrestart      :: selfrestart used to restart. ' +
   '\nselfreset        :: selfreset used to reset the selfbot' +
   '\nselfsoftban      :: selfsoftban <@user>  <reason required> used to softban user\'s' +
   '\nselfwarn         :: selfwarn <@user> <reason required> used to warn people' +
   '\nselfban          :: selfban <@user>  <reason required> used to ban users' +
   '\nselfunban        :: selfunban <@user> <reason required> used to unban users' +
   '\nselfkick         :: selfkick <@user>  <reason required> used to kick users' +
   '\nselfreload       :: selfreload used to reload the bot by Developer (Owner)' +
   '\nselfeval         :: selfeval used for Owner only```'
   );
};