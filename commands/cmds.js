const Discord = require("discord.js");
exports.run = (client, message, args) => {
    if (!message.guild || !message.member) return;
   message.channel.sendMessage("Use `selfmcmds` or `selfncmds`.")
};

//     if (!message.guild || !message.member) return;
//    message.channel.sendMessage(
//    '```asciidoc' +
//    '\n= Self bot Commands =' +
//    '\nselfping         :: selfping will be responed by pong and ms' +
//    '\nselfvac          :: selfvac vacation xD' +
//    '\nselflearnjs      :: selflearnjs show\'s the how usefull links on leaning js' +
//    '\nselflinks        :: selflinks show\'s my social media of John site and server' +
//    '\nselfservers      :: selfservers show\'s the Verified Server\'s or the partnered server' +
//    '\nselfprune        :: selfprune used to clear anywhere to 1-100 messages' +
//    '\nselfuptime       :: selfuptime shows the uptime of the selfbot' +
//    '\nselfreset        :: selfreset used to reset the selfbot' +
//    '\nselfstats        :: selfstats used to show the selfbot stats' +
//    '\nselffriend       :: selffriend <@user>  used to add friend' +
//    '\nselfunfriend     :: selfunfriend <@user>  used to unfriend' +
//    '\nselfblock        :: selfblock <@user>  used to block' +
//    '\nselfunblock      :: selfunblock <@user>  used to unblock' +
//    '\nselfquote        :: selfquote <message ID> used to quote message' +
//    '\nselfinfo         :: selfinfo used to show user\'s info' +
//    '\nselfw            :: selfw <@user> used to show user\'s info' +
//    '\nselfsi           :: selfsi used to show server\'s info' +
//    '\nselfembed        :: selfembed used for text embed <Bench role require>' +
//    '\nselfsoftban      :: selfsoftban <@user>  <reason required> used to softban user\'s' +
//    '\nselfwarn         :: selfwarn <@user> <reason required> used to warn people' +
//    '\nselfban          :: selfban <@user>  <reason required> used to ban users' +
//    '\nselfunban        :: selfunban <@user> <reason required> used to unban users' +
//    '\nselfkick         :: selfkick <@user>  <reason required> used to kick users' +
//    '\nselfavi          :: selfavi used to show your avatar' +
//    '\nselfget          :: selfget <@user> used to get user\'s avatar' +
//    '\nselfcb           :: selfcb dont feel like explaining this one' +
//    '\nselfreload       :: selfreload used to reload the bot by Developer (Owner)' +
//    '\nselfeval         :: selfeval used for Owner only```'
//    );