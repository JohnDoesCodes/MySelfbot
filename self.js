let Discord = require("discord.js");
let bot = new Discord.Client();
let config = require('./config.json');
var randomcolor = require('randomcolor')
var moment = require('moment')
var util = require('util')
var winston = require('winston')
require('./util/eventLoader')(Bot);

process.on('uncaughtException', function(err) {
    console.log('DUD I CAUGHT EXCEPTION?!??!: ' + err); //STOPS THE bot FROM CRASHING
});

function AaN(args, i) {
  if (args[i] === null || args[i] === "" || args[i] === undefined) return true;
  return false;
}

const log = message => {
    console.log("I\'m ready asf!");
};

var reload = (message, cmd) => {
	delete require.cache[require.resolve('./commands/' + cmd)];
	try {
		let cmdFile = require('./commands/' + cmd);
	} catch (err) {
		message.channel.sendMessage(`Problem loading ${cmd}: ${err}`).then(
			response => response.delete(1000).catch(error => console.log(error.stack))
		).catch(error => console.log(error.stack));
	}
	message.channel.sendMessage(`${cmd} reload was a success!`).then(
		response => response.delete(1000).catch(error => console.log(error.stack))
	).catch(error => console.log(error.stack));
};
exports.reload = reload;

// if (message.content === prefix + 'cmds') {
// if (!message.guild || !message.member) return;
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
// }

//     if (message.content.toLowerCase().startsWith(prefix + "cb")) {
//         var cb = message.content.split(" ").slice(1).join(" ");
//         message.delete();
//         message.channel.sendMessage("```js\n" + cb + "\n```");
//     }

//     if (command == "afk") {
//         let nickname = message.guild.member(bot.user).nickname;
//         let username = message.guild.member(bot.user).user.username;
//         if (!nickname) {
//             message.guild.member(bot.user).setNickname(username + ' [is AFK]').then(() => {
//                 message.edit('Set to away from keyboard').then(response => response.delete(1000).catch(error => console.log(error.stack)));
//             }).catch(error => console.log(error.stack));
//         } else

//         if (nickname.search(' [is AFK]')) {
//             message.guild.member(bot.user).setNickname('').then(() => {
//                 message.edit('No longer AFK').then(response => response.delete(1000).catch(error => console.log(error.stack)));
//             }).catch(error => console.log(error.stack));
//         } else

//         if (nickname && !nickname.includes(' [is AFK]')) {
//             message.guild.member(bot.user).setNickname(nickname + ' [is AFK]').then(() => {
//                 message.edit('Set to Away From Keyboard').then(response => response.delete(1000).catch(error => console.log(error.stack)));
//             }).catch(error => console.log(error.stack));
//         } else if (nickname.search(' [is AFK]')) {
//             message.guild.member(bot.user).setNickname(nickname.replace(/ \[AFK\]/g, '')).then(() => {
//                 message.edit('No longer AFK').then(response => response.delete(1000).catch(error => console.log(error.stack)));
//             }).catch(error => console.log(error.stack));
//         }
//     }

//     if (command == "prune") {
//         var amount = parseInt(args[1]);
//         message.channel.fetchMessages({
//                 limit: amount
//             })
//             .then(messages => {
//                 messages.map(message => message.delete().catch(console.error));
//             }).catch(console.error);
//     } else if (command == "clear") {
//         let delamount = parseInt(args[1]) ? parseInt(args[1]) : 1;
//         message.channel.fetchMessages({
//                 limit: 100
//             })
//             .then(messages => {
//                 messagear = messages.array();
//                 messagear = messagear.filter(message => message.author.id === bot.user.id);
//                 messagear.length = delamount + 1;
//                 messagear.map(message => message.delete().catch(console.error));
//             });
//     }
	
//     if (message.content.toLowerCase() == prefix + 'r' || message.content.toLowerCase() == prefix + 'reload') {
//         message.channel.sendMessage(`:rocket: Selfbot is resetting, please wait. :rocket:`).then(function(t) {
//             process.exit(1);
//         });
//     }


//  if (message.content === prefix + "stats") {
//         var moment = require('moment')
//         var embed = new Discord.RichEmbed();
//         embed.setColor("#0099FF")
//             .setFooter(' ', ' ')
//             .setThumbnail(`${bot.user.avatarURL}`)
//             .setTimestamp()
//             .addField('> Uptime', (Math.round(bot.uptime / (1000 * 60 * 60))) + " hours, " + (Math.round(bot.uptime / (1000 * 60)) % 60) + " minutes, and " + (Math.round(bot.uptime / 1000) % 60) + " seconds")
//             .addField('> General Stats', `• Servers: ${bot.guilds.size}\n• Channels: ${bot.channels.size}\n• Users: ${bot.users.size}`, true)
//             .addField('> Working on', `• New Pando\'s commands, click this [Link to join](https://discord.gg/dfdvArY)`)
//             .addField('> Update', '• Added learnjs command')
//         message.channel.sendEmbed(
//             embed, {
//                 disableEveryone: true
//             }
//         );
// }

//     if (command == "friend") {
//         if (!message.mentions.users.first()) return message.edit('Failed to send friend request to a cool guy.');
//         message.delete()
//         message.mentions.users.first().addFriend().then(() => {
//             message.edit("I just add friend a cool guy xd");
//         })
//     }

//     if (command == "unfriend") {
//         if (!message.mentions.users.first()) return message.edit('Failed to unfriend a bitch, check your deym codes.');
//         message.delete()
//         message.mentions.users.first().removeFriend().then(() => {
//             message.edit("About time to remove this bitch from my friends list.");
//         })
//     }

//     if (command == "block") {
//         message.delete()
//         if (!message.mentions.users.first()) return message.edit('Failed to blocked a bitch, check your codes.');

//         message.mentions.users.first().block().then(() => {
//             message.edit("Bitch has bee blocked!");
//         })
//     }

//     if (command == "unblock") {
//         if (!message.mentions.users.first()) return message.edit('Failed to unblocked a user, check you deym codes.');
//         message.delete()
//         message.mentions.users.first().unblock().then(() => {
//             message.edit("A bitch has been unblocked.");
//         })
//     }

// if (message.content.startsWith(prefix + "insult")) {
//   if (!message.guild || !message.member) return;
// let user = message.guild.member(message.mentions.users.first());
// if (!user)
// return message.channel.sendMessage("`io.insult <user> and try what can I do.`")
//   var response = ['Youre a failed abortion whose birth certificate is an apology from the condom factory.', 'Your family tree is a cactus, because everybody on it is a prick.', 'It looks like your face caught on fire and someone tried to put it out with a fork.', 'Yow I have fuck your sister you son of a bitch!', 'You are so ugly that when your mama dropped you off at school she got a fine for littering.', 'I am fuckin your mother you fucking whore!', 'Your so ugly when you popped out the doctor said aww what a treasure and your mom said yeah lets bury it!', 'You were picking up trash yesterday but you forgot to pick up one thing: your skills', 'Your cant even beat me on 1v1, surely VentusGaming can make you suck your own dick!', 'Your Fuckin Noob', 'Yow Cyka Blyat you are a fuckin cunt that you are a son of your fuckin slut mother!'];
// message.channel.sendMessage(response[~~(Math.random() * response.length)])
// }

//     if (message.content.toLowerCase().startsWith(prefix + 'quote') || message.content.toLowerCase().startsWith(prefix + 'q')) {

//         var quote = message.content.split(" ").slice(1).join(" ");

//         message.delete();

//         if (quote.length < 1) {

//             return message.channel.sendMessage("Please specify a message ID.");

//         }

//         message.channel.fetchMessages({

//             limit: 1,

//             around: quote

//         }).then(messages => {

//             const fm = messages.first();

//             message.channel.sendMessage("", {

//                 embed: {

//                     color: 0x3cb8c9,

//                     author: {

//                         name: `${fm.author.username}#${fm.author.discriminator}`,

//                         icon_url: fm.author.avatarURL

//                     },

//                     description: fm.content

//                 }

//             });

//         });

//     }

    // if (command === "eval") {
    //     let suffix = message.content.slice(6);

    //     try {
    //         let evaled = eval(suffix);
    //         let type = typeof evaled;
    //         let insp = util.inspect(evaled, {
    //             depth: 0
    //         });
    //         let tosend = [];

    //         if (evaled === null) evaled = 'null';

    //         if (evaled.toString().includes(bot.token) ||
    //             insp.toString().includes(bot.token)) return message.edit('Cannot complete eval due to token.');

    //         tosend.push('**EVAL:**');
    //         tosend.push('\`\`\`xl');
    //         tosend.push(clean(suffix));
    //         tosend.push('\`\`\`');
    //         tosend.push('**Evaluates to:**');
    //         tosend.push('\`\`\`xl');
    //         tosend.push(clean(evaled));
    //         tosend.push('\`\`\`');
    //         if (evaled instanceof Object) {
    //             tosend.push('**Inspect:**');
    //             tosend.push('\`\`\`xl');
    //             tosend.push(insp);
    //             tosend.push('\`\`\`');
    //         } else {
    //             tosend.push('**Type:**');
    //             tosend.push('\`\`\`xl');
    //             tosend.push(type);
    //             tosend.push('\`\`\`');
    //         }
    //         message.edit(tosend.join('\n'));
    //         winston.log('info', `Evaluated ${tosend.join('\n')}`);
    //     } catch (err) {
    //         let tosend = [];
    //         tosend.push('**EVAL:** \`\`\`xl');
    //         tosend.push(clean(suffix));
    //         tosend.push('\`\`\`');
    //         tosend.push('**Error:** \`\`\`xl');
    //         tosend.push(clean(err.stack));
    //         tosend.push('\`\`\`');
    //         message.edit(tosend.join('\n'));
    //         winston.log('info', `Error: ${tosend.join('\n')}`);
    //     }
    // }

    // function clean(text) {
    //     if (typeof(text) === "string") {
    //         return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    //     } else {
    //         return text;
    //     }
    // }

//   if (message.content.startsWith(prefix + "info")) {
//     var embed = new Discord.RichEmbed();
//     var moment = require('moment')
//     embed.addField("> Member Details", `• Name: ${message.author.username}\n• Discrim: #${message.author.discriminator}\n• ID: ${message.author.id}\n• Roles: ${message.member.roles.filter(r => {return r.name != '@everyone'}).map(r => r.name).join(', ')}\n• Joined at: ${moment(message.joinedAt).format('ddd MMM Do YYYY')}`, true)
//     .addField('> User Details', `• Status: ${message.author.presence.status}\n• Game: ${message.author.presence.game === null ? "No Game" : message.author.presence.game.name}\n• Joined Discord: ${moment(message.author.createdAt).format('ddd MMM Do YYYY')}`, true)
//     .setColor("#EEFD3F")
//     .setFooter(' ', ' ')
//     .setThumbnail(`${message.author.avatarURL}`)//`${message.guild.iconURL}`
//     .setTimestamp()
//     .setURL(`${message.author.avatarURL}`)
//   message.channel.sendEmbed(
//     embed,
//     { disableEveryone: true }
//   );
//   }
	
//   if (command == "w") {
//       var mention = message.mentions.users.first();
//       if(message.mentions.users.size === 0) {
//         return message.channel.sendMessage("\`?\` | Please mention a user.")
//       }
//   var embed = new Discord.RichEmbed();
//   var moment = require('moment')
//   embed.addField("> Member Details", `• Name: ${mention.username}\n• Discrim: #${mention.discriminator}\n• User ID: ${mention.id}\n• Game: ${mention.presence.game === null ? "No Game" : mention.presence.game.name}\n• Joined at: ${moment(mention.joinedAt).format('ddd MMM Do YYYY')}`, true)
//   .addField('> User Details', `• Status: ${mention.presence.status}\n• Joined Discord: ${moment(message.author.createdAt).format('ddd MMM Do YYYY')}`, true)
//   .setColor("#EEFD3F")
//   .setFooter(' ', ' ')
//   .setThumbnail(`${mention.avatarURL}`)//`${message.guild.iconURL}`
//   .setTimestamp()
//   .setURL(`${mention.avatarURL}`)
// message.channel.sendEmbed(
//   embed,
//   { disableEveryone: true }
// );
// }


//   if (message.content.startsWith(prefix + `si`)) {
//     var embed = new Discord.RichEmbed();
//     var moment = require('moment')
//     embed.addField("> Server Info", `• Server name: ${message.guild.name}\n• Server ID: ${message.guild.id}\n• Owner: ${message.guild.owner.user.username}\n• Owner ID: ${message.guild.owner.id}\n• ${message.guild.memberCount} Members`, true)
//         .addField('> Other', `• ${message.guild.roles.filter(r => r.name).size} roles\n• Region: ${message.guild.region}\n• ${message.guild.channels.filter(r => r.name).size} channels total count\n• Guild Created: ${moment(message.guild.createdAt).format('ddd MMM Do YYYY')}\n• Verification Level: ${message.guild.verificationLevel}`, true)
//         .setColor("#EEFD3F")
// 		.setFooter(' ', ' ')
//         .setThumbnail(`${message.guild.iconURL}`) //`${message.guild.iconURL}`
//         .setTimestamp()
//         .setURL(`${message.author.avatarURL}`)
//     message.channel.sendEmbed(
//         embed, {
//             disableEveryone: true
//         }
//     );
//   }
  
// if (message.content.toLowerCase().startsWith(prefix + "sb")) {
//         var firstMention = message.guild.member(message.mentions.users.first());
//         if (message.mentions.users.size === 0) {
//                 return message.reply("Mention a user to softban.");
//         }
//         let reason = message.content.split(" ").splice(2, 30).join(" ");
//         if (!firstMention) {
//                 return message.reply("Please include a user to ban.");
//         }
//         if (!reason) {
//                 return message.reply("Please include a reason.");
//         }
//         if (!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
//                 return message.channel.send("`ERROR:` I do not have permission to ban.");
//         }
//         firstMention.ban(1).then(member => {
//                 message.guild.unban(firstMention);
//                 message.delete();
//                 var embed = new Discord.RichEmbed();
//                 embed.setAuthor(`Soft-banned`, ` `)
//                 .setColor("#FF000A")
//                 .setDescription(`${user.username}`, true)
//                 .setThumbnail(`${user.avatarURL}`)
//                 .setTimestamp()
//                 .addField('Guild In', `${message.guild.name}`, true)
//                 .addField('Reason', `${reason}`, true)
//                 user.sendEmbed(embed, {
//                         disableEveryone: true
//                 });
//                 message.channel.sendMessage(`***${user.username} has been soft-banned.***`)
//                 var embed = new Discord.RichEmbed();
//                 embed.setAuthor(`Moderator`, ` `)
//                 .setColor("#FF000A")
//                 .setDescription(`${message.author.username}`, true)
//                 .setThumbnail(`${user.avatarURL}`)
//                 .setTimestamp()
//                 .addField('User Soft-banned', `${user.username}`, true).addField('Reason', `${reason}`, true)
//                 message.guild.channels.find('name', 'mod-log').sendEmbed(embed, {
//                         disableEveryone: true
//                 });
//         });
// }

//     if (message.content.startsWith(prefix + 'unban')) {
//         var user = message.mentions.users.first()
//         var member = message.guild.member;
//        // var reason = message.content.split(' ').slice(2).join(' ');
//         if (!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
//             return message.channel.send("`ERROR:` I do not have permission to unban.");
//         }
//         message.guild.fetchBans().then(users => {
//             if (isNaN(message.content.split(" ")[1])) {
//                 user = users.find('username', message.content.split(" ")[1]);
//             } else {
//                 user = users.get(message.content.split(" ")[1]);
//             }
//             message.guild.unban(user);
//             // message.user.sendMessage(`You have been unbanned from ${message.guild.name}`)
//             message.channel.sendMessage(`${user.username} has been unbanned from the guild! :ok_hand::skin-tone-4:`)
//             // var embed = new Discord.RichEmbed();
//             // embed.addField(`Moderator`, `${message.author.username}`, true)
//             //     .setColor(0xFFF00)
//             //     .setTimestamp()
//             //     .addField('User Unbanned', `${user}`, true)
//             // message.guild.channels.find('name', 'mod-log').sendEmbed(
//             //     embed, {
//             //         disableEveryone: true
//             //     }
//             // );
//         });
//     }

// if (command == "warn") {
//         var reason = message.content.split(' ').slice(2).join(' ');
//         var user = message.mentions.users.first();
//         if (!user) return message.channel.sendMessage('Please include a user to warn.');
//         if (!reason) return message.channel.sendMessage('Please include a reason.');
//         var embed = new Discord.RichEmbed();
//         embed.setAuthor(`Warning`, ` `)
//         .setColor("#ECC31A")
//         .setDescription(`${user.username}`, true)
//         .setThumbnail(`${user.avatarURL}`)
//         .setTimestamp()
//         .addField('Guild In', `${message.guild.name}`,true)
//         .addField('Reason', `${reason}`, true)
//         user.sendEmbed(embed, {
//                 disableEveryone: true
//         });
//         message.channel.sendMessage(`***${user.username}*** ***Has been warned*** 👌`)
//         var embed = new Discord.RichEmbed();
//         embed.setAuthor(`Moderator`, ` `)
//         .setColor("#ECC31A")
//         .setDescription(`${message.author.username}`, true)
//         .setThumbnail(`${user.avatarURL}`)
//         .setTimestamp()
//         .addField('User Warned',`${user.username}`, true)
//         .addField('Reason', `${reason}`, true)
//         message.guild.channels.find('name', 'mod-log').sendEmbed(embed, {
//                 disableEveryone: true
//         });
// }

//  if (command == "ban") {
//          var user = message.mentions.users.first();
//          var member = message.guild.member(user);
//          var reason = message.content.split(' ').slice(2).join(' ');
//          if (!user) return message.channel.sendMessage('Please include a user to ban.');
//          if (!reason) return message.channel.sendMessage('Please include a reason.');
//          if (!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
//             return message.channel.send("`ERROR:` I do not have permission to ban.");
//         }
//          member.ban().then(() => {
//                  var embed = new Discord.RichEmbed();
//                  embed.setAuthor(`Banned`, ` `)
//                  .setColor("#FF000A")
//                  .setDescription(`${user.username}`, true)
//                  .setThumbnail(`${user.avatarURL}`)
//                  .setTimestamp().addField('Guild In',`${message.guild.name}`, true)
//                  .addField('Reason', `${reason}`, true)
//                  user.sendEmbed(embed, {
//                          disableEveryone: true
//                  });
//                  message.channel.sendMessage(`***${user.username} has been banned.***`)
//                  var embed = new Discord.RichEmbed();
//                  embed.setAuthor(`Moderator`, ` `)
//                  .setColor("#FF000A")
//                  .setDescription(`${message.author.username}`, true)
//                  .setThumbnail(`${user.avatarURL}`)
//                  .setTimestamp()
//                  .addField('User Warned', `${user.username}`, true)
//                  .addField('Reason', `${reason}`, true)
//                  message.guild.channels.find('name', 'mod-log').sendEmbed(embed, {
//                          disableEveryone: true
//                  });
//          });
//  }

//  if (message.content.startsWith(prefix + 'kick')) {
//          var user = message.mentions.users.first();
//          var member = message.guild.member(user);
//          var reason = message.content.split(' ').slice(2).join(' ');
//          if (!user) return message.channel.sendMessage('Please include a user to kick.');
//          if (!reason) return message.channel.sendMessage('Please include a reason.');
//          if (!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
//             return message.channel.send("`ERROR:` I do not have permission to kick.");
//         }
//          member.kick().then(() => {
//                  var embed = new Discord.RichEmbed();
//                  embed.setAuthor(`Kicked`, ` `)
//                  .setColor("#B5E02C")
//                  .setDescription(`${user.username}`, true)
//                  .setThumbnail(`${user.avatarURL}`)
//                  .setTimestamp().addField('Guild In',`${message.guild.name}`, true)
//                  .addField('Reason', `${reason}`, true)
//                  user.sendEmbed(embed, {
//                          disableEveryone: true
//                  });
//                  message.channel.sendMessage(`***${user.username} has been kicked.***`)
//                  var embed = new Discord.RichEmbed();
//                  embed.setAuthor(`Moderator`, ` `)
//                  .setColor("#B5E02C")
//                  .setDescription(`${message.author.username}`, true)
//                  .setThumbnail(`${user.avatarURL}`)
//                  .setTimestamp()
//                  .addField('User Kicked', `${user.username}`, true)
//                  .addField('Reason', `${reason}`, true)
//                  message.guild.channels.find('name', 'mod-log').sendEmbed(embed, {
//                          disableEveryone: true
//                  });
//          });
//  }

//    if (message.content.startsWith(prefix + 'avi')) {
//   if (!message.guild || !message.member) return;
//        message.mentions.users.first();
// 	   message.channel.sendMessage(message.author.avatarURL);
//     }

//     if (message.content.startsWith(prefix + "get")) {
//     if (!message.guild || !message.member) return;
//     var mention = message.mentions.users.first();
//     if (!mention) {
//      return message.channel.sendMessage("\`?\` | Mention a user.")
//     }
//     message.channel.sendMessage(mention.avatarURL)
//    }
	
// 	if (message.content.toLowerCase().startsWith(prefix + "links")) {
//     var embed = new Discord.RichEmbed();
//     embed.addField('My Facebook Link', 'This is My Facebook link. Add me on [Facebook](http://www.facebook.com/BenchMigami)')
//     .addField('Where to find Me', 'Here is a server where find, just [click here](https://discord.gg/dfdvArY)')
// 	.addField('Another Server to find me', 'Here is a lit server where you can find me, just [click here](https://discord.gg/8aKgYJx)')
//     .setColor("#EEFD3F")
//     message.channel.sendEmbed(

//             embed, {

//                 disableEveryone: true

//             }

//         );
// }

// if (message.content.toLowerCase().startsWith(prefix + "learnjs")) {
//     if(message.author.bot) return;
//     var embed = new Discord.RichEmbed();
//     embed.setFooter('Javascript Code', ' ')
//     .addField('Learning JavaScript', "**__Useful links for learning JavaScript and Node__**:\n\n**Codecademy online course**: https://www.codecademy.com/learn/javascript\n**Eloquent Javascript, free book**: http://eloquentjavascript.net/\n\n**Some Node**:\nhttp://nodeschool.io/\nhttps://www.codeschool.com/courses/real-time-web-with-node-js\n**Discord.js getting started guides**:\nhttps://www.youtube.com/channel/UCvQubaJPD0D-PSokbd5DAiw/videos\nhttps://www.youtube.com/channel/UCLun-hgcYUgNvCCj4sIa-jA/videos\n**Javascript reference/docs**: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference\n**discord.js documentation**: https://discord.js.org/#!/docs")
//     .setColor("#EEFD3F")
//     message.channel.sendEmbed(
//         embed, {
//             disableEveryon: true
//         }
//     )
// }

// if (message.content.toLowerCase().startsWith(prefix + "servers")) {
//     message.author.sendMessage("Here are the Verified Server\'s!")
//     var embed = new Discord.RichEmbed();
//     embed.addField('Server\'s', '- Pando\'s Hangout is where the support server for Pando https://discord.gg/dfdvArY\n- Critical Ops Clans is a gaming Community https://discord.gg/8aKgYJx\n- Panda\'s Hangout is the server where Jaybot made https://discord.gg/R4AXuBM\n- SUPR3M3 Official is the server a clan on Critical Ops https://discord.gg/FdudkNN')
//     .setColor("#EEFD3F")
//     message.channel.sendEmbed(

//             embed, {

//                 disableEveryone: true

//             }

//         );
// }
	
// 	if (message.content.startsWith(prefix + "vac")) {
// 		message.channel.sendMessage("**Vac**ation"),
// message.edit("===========================  :red_car: "),
// message.edit("==========================  :red_car: "),
// message.edit("=========================  :red_car: "),
// message.edit("========================  :red_car: "),
// message.edit("======================  :red_car: "),
// message.edit("=====================  :red_car: "),
// message.edit(":warning: **Traffic** :warning: "),
// message.edit("=======================  :red_car: "),
// message.edit("======================  :red_car: "),
// message.edit("=====================  :red_car: "),
// message.edit("====================  :red_car: "),
// message.edit("===================  :red_car: "),
// message.edit("==================  :red_car: "),
// message.edit("=================  :red_car: "),
// message.edit("================  :red_car: "),
// message.edit("===============  :red_car: "),
// message.edit("==============  :red_car: "),
// message.edit("=============  :red_car: "),
// message.edit("============  :red_car: "),
// message.edit("===========  :red_car: "),
// message.edit("==========  :red_car: "),
// message.edit("=========  :red_car: "),
// message.edit("========  :red_car: "),
// message.edit("=======  :red_car: "),
// message.edit("======  :red_car: "),
// message.edit("=====  :red_car: "),
// message.edit("====  :red_car: "),
// message.edit("===  :red_car: "),
// message.edit("==  :red_car: "),
// message.edit("=  :red_car: "),
// message.edit(" :red_car: "),
// message.edit("**Vac**ation over")
// 	}
	
//     if (command == 'embed') {

//         let noto = message.content.split(" ").slice(1).join(" ");

//         message.delete();

//         var embed = new Discord.RichEmbed();

//         embed.setColor("#EEFD3F")

//             .setDescription(noto)

//         message.channel.sendEmbed(

//             embed, {

//                 disableEveryon: true

//             }

//         );

//     }

bot.login(config.tokens);
