const Discord = require("discord.js");
exports.run = (client, message, args) => {
    if (!message.guild || !message.member) return;
   message.channel.sendMessage(
   '```asciidoc' +
   '\n= Normal Commands =' +
   '\nselfping         :: selfping will be responed by pong and ms' + 
   '\nselfvac          :: selfvac vacation xD' +
   '\nselflearnjs      :: selflearnjs show\'s the how usefull links on leaning js' +
   '\nselflinks        :: selflinks show\'s my social media of John site and server' +
   '\nselfstats        :: selfstats used to show the selfbot stats' +
   '\nselffriend       :: selffriend <@user>  used to add friend' +
   '\nselfunfriend     :: selfunfriend <@user>  used to unfriend' +
   '\nselfblock        :: selfblock <@user>  used to block' +
   '\nselfunblock      :: selfunblock <@user>  used to unblock' +
   '\nselfquote        :: selfquote <message ID> used to quote message' +
   '\nselfinfo         :: selfinfo used to show user\'s info' +
   '\nselfw            :: selfw <@user> used to show user\'s info' +
   '\nselfsi           :: selfsi used to show server\'s info' +
   '\nselfembed        :: selfembed used for text embed <Bench role require>' +
   '\nselfavi          :: selfavi used to show your avatar' +
   '\nselfget          :: selfget <@user> used to get user\'s avatar' +
   '\nselfcb           :: selfcb this is the code block thingy```'
   );
};