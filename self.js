const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
var randomcolor = require('randomcolor')
var moment = require('moment')
var winston = require('winston')
require('./util/eventLoader')(client);

process.on('uncaughtException', function(err) {
    console.log('DUD I CAUGHT EXCEPTION?!??!: ' + err); //STOPS THE client FROM CRASHING
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
//                 messagear = messagear.filter(message => message.author.id === client.user.id);
//                 messagear.length = delamount + 1;
//                 messagear.map(message => message.delete().catch(console.error));
//             });
//     }
	
//     if (message.content.toLowerCase() == prefix + 'r' || message.content.toLowerCase() == prefix + 'reload') {
//         message.channel.sendMessage(`:rocket: Selfclient is resetting, please wait. :rocket:`).then(function(t) {
//             process.exit(1);
//         });
//     }

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

    //         if (evaled.toString().includes(client.token) ||
    //             insp.toString().includes(client.token)) return message.edit('Cannot complete eval due to token.');

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
//         if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
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
//         if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
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
//          if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
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
//          if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
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
//     if(message.author.client) return;
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
//     embed.addField('Server\'s', '- Pando\'s Hangout is where the support server for Pando https://discord.gg/dfdvArY\n- Critical Ops Clans is a gaming Community https://discord.gg/8aKgYJx\n- Panda\'s Hangout is the server where Jayclient made https://discord.gg/R4AXuBM\n- SUPR3M3 Official is the server a clan on Critical Ops https://discord.gg/FdudkNN')
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

client.login(config.tokens);
