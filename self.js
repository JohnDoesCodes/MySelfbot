let Discord = require("discord.js");
let bot = new Discord.Client();
let config = require('./config.json');
var randomcolor = require('randomcolor')
var moment = require('moment')
var util = require('util')
var winston = require('winston')

process.on('uncaughtException', function(err) {
    console.log('DUD I CAUGHT EXCEPTION?!??!: ' + err); //STOPS THE BOT FROM CRASHING
});

function AaN(args, i) {
  if (args[i] === null || args[i] === "" || args[i] === undefined) return true;
  return false;
}

bot.once('ready', () => {
	let games = [`with Coding`, `I love JavaScript`, `with Chris`, `xd`,];
      setInterval(() => {
        bot.user.setGame(games[Math.floor(Math.random() * games.length)])
		console.log('Shut up I am fucking ready!');
}, 12000)
});

const prefix = "self"

bot.on('message', msg => {
  if (msg.author.id !== bot.user.id) return; //Only allows you to work with it, since it's called a selfbot :P

  let prefix = config.prefix
  let channel = msg.channel;
  let guild = msg.guild;
  let text = msg.content;
  let args = text.split(" ");
  let command = text.substring(prefix.length, args[0].length).toLowerCase();

if (msg.content === prefix + 'cmds') {
if (!msg.guild || !msg.member) return;
   msg.channel.sendMessage(
   '```asciidoc' +
   '\n= Self Bot Commands =' +
   '\nselfping         :: selfping will be responed by pong and ms' +
   '\nselflearnjs      :: selflearnjs show\'s the how usefull links on leaning js' +
   '\nselflinks        :: selflinks show\'s my social media of John site and server' +
   '\nselfservers      :: selfservers show\'s the Verified Server\'s or the partnered server' +
   '\nselfprune        :: selfprune used to clear anywhere to 1-100 messages' +
   '\nselfuptime       :: selfuptime shows the uptime of the selfbot' +
   '\nselfreset        :: selfreset used to reset the selfbot' +
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
   '\nselfsoftban      :: selfsoftban <@user>  <reason required> used to softban user\'s' +
   '\nselfwarn         :: selfwarn <@user> <reason required> used to warn people' +
   '\nselfban          :: selfban <@user>  <reason required> used to ban users' +
   '\nselfunban        :: selfunban <@user> <reason required> used to unban users' +
   '\nselfkick         :: selfkick <@user>  <reason required> used to kick users' +
   '\nselfavi          :: selfavi used to show your avatar' +
   '\nselfget          :: selfget <@user> used to get user\'s avatar' +
   '\nselfcb           :: selfcb dont feel like explaining this one' +
   '\nselfreload       :: selfreload used to reload the bot by Developer (Owner)' +
   '\nselfeval         :: selfeval used for Owner only```'
   );
}

    if (msg.content.toLowerCase().startsWith(prefix + "cb")) {
        var cb = msg.content.split(" ").slice(1).join(" ");
        msg.delete();
        msg.channel.sendMessage("```js\n" + cb + "\n```");
    }

    if (command == "afk") {
        let nickname = msg.guild.member(bot.user).nickname;
        let username = msg.guild.member(bot.user).user.username;
        if (!nickname) {
            msg.guild.member(bot.user).setNickname(username + ' [is AFK]').then(() => {
                msg.edit('Set to away from keyboard').then(response => response.delete(1000).catch(error => console.log(error.stack)));
            }).catch(error => console.log(error.stack));
        } else

        if (nickname.search(' [is AFK]')) {
            msg.guild.member(bot.user).setNickname('').then(() => {
                msg.edit('No longer AFK').then(response => response.delete(1000).catch(error => console.log(error.stack)));
            }).catch(error => console.log(error.stack));
        } else

        if (nickname && !nickname.includes(' [is AFK]')) {
            msg.guild.member(bot.user).setNickname(nickname + ' [is AFK]').then(() => {
                msg.edit('Set to Away From Keyboard').then(response => response.delete(1000).catch(error => console.log(error.stack)));
            }).catch(error => console.log(error.stack));
        } else if (nickname.search(' [is AFK]')) {
            msg.guild.member(bot.user).setNickname(nickname.replace(/ \[AFK\]/g, '')).then(() => {
                msg.edit('No longer AFK').then(response => response.delete(1000).catch(error => console.log(error.stack)));
            }).catch(error => console.log(error.stack));
        }
    }

    if (command == "ping") {
        msg.delete()
        startTime = Date.now();
        channel.sendMessage("Pinging...").then((msg) => {
            endTime = Date.now();
            msg.edit(`Pong! \`${Math.round(endTime - startTime)}ms\``);
        });
    }

    if (command == "prune") {
        var amount = parseInt(args[1]);
        msg.channel.fetchMessages({
                limit: amount
            })
            .then(messages => {
                messages.map(msg => msg.delete().catch(console.error));
            }).catch(console.error);
    } else if (command == "clear") {
        let delamount = parseInt(args[1]) ? parseInt(args[1]) : 1;
        msg.channel.fetchMessages({
                limit: 100
            })
            .then(messages => {
                msgar = messages.array();
                msgar = msgar.filter(msg => msg.author.id === bot.user.id);
                msgar.length = delamount + 1;
                msgar.map(msg => msg.delete().catch(console.error));
            });
    }
	
    if (msg.content.toLowerCase() == prefix + 'r' || msg.content.toLowerCase() == prefix + 'reload') {
        msg.channel.sendMessage(`:rocket: SelfBot is resetting, please wait. :rocket:`).then(function(t) {
            process.exit(1);
        });
    }


 if (msg.content === prefix + "stats") {
        var moment = require('moment')
        var embed = new Discord.RichEmbed();
        embed.setColor("#0099FF")
            .setFooter(' ', ' ')
            .setThumbnail(`${bot.user.avatarURL}`)
            .setTimestamp()
            .addField('> Uptime', (Math.round(bot.uptime / (1000 * 60 * 60))) + " hours, " + (Math.round(bot.uptime / (1000 * 60)) % 60) + " minutes, and " + (Math.round(bot.uptime / 1000) % 60) + " seconds")
            .addField('> General Stats', `• Servers: ${bot.guilds.size}\n• Channels: ${bot.channels.size}\n• Users: ${bot.users.size}`, true)
            .addField('> Working on', `• New Pando\'s commands, click this [Link to join](https://discord.gg/dfdvArY)`)
            .addField('> Update', '• Added learnjs command')
        msg.channel.sendEmbed(
            embed, {
                disableEveryone: true
            }
        );
}

    if (command == "friend") {
        if (!msg.mentions.users.first()) return msg.edit('**Friend** > Failed, no user.');

        msg.mentions.users.first().addFriend().then(() => {
            msg.edit("**Friend** > Done");
        })
    }

    if (command == "unfriend") {
        if (!msg.mentions.users.first()) return msg.edit('**Friend** > Failed, no user.');

        msg.mentions.users.first().removeFriend().then(() => {
            msg.edit("**Removed Friend** > Done");
        })
    }

    if (command == "block") {
        if (!msg.mentions.users.first()) return msg.edit('**Block** > Failed, no user.');

        msg.mentions.users.first().block().then(() => {
            msg.edit("**Person** > Blocked");
        })
    }

    if (command == "unblock") {
        if (!msg.mentions.users.first()) return msg.edit('**Unblock** > Failed, no user.');

        msg.mentions.users.first().unblock().then(() => {
            msg.edit("**Person** > Unblocked");
        })
    }

if (msg.content.startsWith(prefix + "insult")) {
  if (!msg.guild || !msg.member) return;
let user = msg.guild.member(msg.mentions.users.first());
if (!user)
return msg.channel.sendMessage("`io.insult <user> and try what can I do.`")
  var response = ['Youre a failed abortion whose birth certificate is an apology from the condom factory.', 'Your family tree is a cactus, because everybody on it is a prick.', 'It looks like your face caught on fire and someone tried to put it out with a fork.', 'Yow I have fuck your sister you son of a bitch!', 'You are so ugly that when your mama dropped you off at school she got a fine for littering.', 'I am fuckin your mother you fucking whore!', 'Your so ugly when you popped out the doctor said aww what a treasure and your mom said yeah lets bury it!', 'You were picking up trash yesterday but you forgot to pick up one thing: your skills', 'Your cant even beat me on 1v1, surely VentusGaming can make you suck your own dick!', 'Your Fuckin Noob', 'Yow Cyka Blyat you are a fuckin cunt that you are a son of your fuckin slut mother!'];
msg.channel.sendMessage(response[~~(Math.random() * response.length)])
}

    if (msg.content.toLowerCase().startsWith(prefix + 'quote') || msg.content.toLowerCase().startsWith(prefix + 'q')) {

        var quote = msg.content.split(" ").slice(1).join(" ");

        msg.delete();

        if (quote.length < 1) {

            return msg.channel.sendMessage("Please specify a message ID.");

        }

        msg.channel.fetchMessages({

            limit: 1,

            around: quote

        }).then(msgs => {

            const fm = msgs.first();

            msg.channel.sendMessage("", {

                embed: {

                    color: 0x3cb8c9,

                    author: {

                        name: `${fm.author.username}#${fm.author.discriminator}`,

                        icon_url: fm.author.avatarURL

                    },

                    description: fm.content

                }

            });

        });

    }

    // if (command === "eval") {
    //     let suffix = msg.content.slice(6);

    //     try {
    //         let evaled = eval(suffix);
    //         let type = typeof evaled;
    //         let insp = util.inspect(evaled, {
    //             depth: 0
    //         });
    //         let tosend = [];

    //         if (evaled === null) evaled = 'null';

    //         if (evaled.toString().includes(bot.token) ||
    //             insp.toString().includes(bot.token)) return msg.edit('Cannot complete eval due to token.');

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
    //         msg.edit(tosend.join('\n'));
    //         winston.log('info', `Evaluated ${tosend.join('\n')}`);
    //     } catch (err) {
    //         let tosend = [];
    //         tosend.push('**EVAL:** \`\`\`xl');
    //         tosend.push(clean(suffix));
    //         tosend.push('\`\`\`');
    //         tosend.push('**Error:** \`\`\`xl');
    //         tosend.push(clean(err.stack));
    //         tosend.push('\`\`\`');
    //         msg.edit(tosend.join('\n'));
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

  if (msg.content.startsWith(prefix + "info")) {
    var embed = new Discord.RichEmbed();
    var moment = require('moment')
    embed.addField("> Member Details", `• Name: ${msg.author.username}\n• Discrim: #${msg.author.discriminator}\n• ID: ${msg.author.id}\n• Roles: ${msg.member.roles.filter(r => {return r.name != '@everyone'}).map(r => r.name).join(', ')}\n• Joined at: ${moment(msg.joinedAt).format('ddd MMM Do YYYY')}`, true)
    .addField('> User Details', `• Status: ${msg.author.presence.status}\n• Game: ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}\n• Joined Discord: ${moment(msg.author.createdAt).format('ddd MMM Do YYYY')}`, true)
    .setColor("#EEFD3F")
    .setFooter(' ', ' ')
    .setThumbnail(`${msg.author.avatarURL}`)//`${msg.guild.iconURL}`
    .setTimestamp()
    .setURL(`${msg.author.avatarURL}`)
  msg.channel.sendEmbed(
    embed,
    { disableEveryone: true }
  );
  }
	
  if (msg.content.startsWith(prefix + "w")) {
      var mention = msg.mentions.users.first();
      if(msg.mentions.users.size === 0) {
        return msg.channel.sendMessage("\`?\` | Please mention a user.")
      }
  var embed = new Discord.RichEmbed();
  var moment = require('moment')
  embed.addField("> Member Details", `• Name: ${mention.username}\n• Discrim: #${mention.discriminator}\n• User ID: ${mention.id}\n• Game: ${mention.presence.game === null ? "No Game" : mention.presence.game.name}\n• Joined at: ${moment(mention.joinedAt).format('ddd MMM Do YYYY')}`, true)
  .addField('> User Details', `• Status: ${mention.presence.status}\n• Joined Discord: ${moment(msg.author.createdAt).format('ddd MMM Do YYYY')}`, true)
  .setColor("#EEFD3F")
  .setFooter(' ', ' ')
  .setThumbnail(`${mention.avatarURL}`)//`${msg.guild.iconURL}`
  .setTimestamp()
  .setURL(`${mention.avatarURL}`)
msg.channel.sendEmbed(
  embed,
  { disableEveryone: true }
);
}


  if (msg.content.startsWith(prefix + `si`)) {
    var embed = new Discord.RichEmbed();
    var moment = require('moment')
    embed.addField("> Server Info", `• Server name: ${msg.guild.name}\n• Server ID: ${msg.guild.id}\n• Owner: ${msg.guild.owner.user.username}\n• Owner ID: ${msg.guild.owner.id}\n• ${msg.guild.memberCount} Members`, true)
        .addField('> Other', `• ${msg.guild.roles.filter(r => r.name).size} roles\n• Region: ${msg.guild.region}\n• ${msg.guild.channels.filter(r => r.name).size} channels total count\n• Guild Created: ${moment(msg.guild.createdAt).format('ddd MMM Do YYYY')}\n• Verification Level: ${msg.guild.verificationLevel}`, true)
        .setColor("#EEFD3F")
		.setFooter(' ', ' ')
        .setThumbnail(`${msg.guild.iconURL}`) //`${msg.guild.iconURL}`
        .setTimestamp()
        .setURL(`${msg.author.avatarURL}`)
    msg.channel.sendEmbed(
        embed, {
            disableEveryone: true
        }
    );
  }
  
if (msg.content.toLowerCase().startsWith(prefix + "sb")) {
        var firstMention = msg.guild.member(msg.mentions.users.first());
        if (msg.mentions.users.size === 0) {
                return msg.reply("Mention a user to softban.");
        }
        let reason = msg.content.split(" ").splice(2, 30).join(" ");
        if (!firstMention) {
                return msg.reply("Please include a user to ban.");
        }
        if (!reason) {
                return msg.reply("Please include a reason.");
        }
        if (!msg.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
                return msg.channel.send("`ERROR:` I do not have permission to ban.");
        }
        firstMention.ban(1).then(member => {
                msg.guild.unban(firstMention);
                msg.delete();
                var embed = new Discord.RichEmbed();
                embed.setAuthor(`Soft-banned`, ` `)
                .setColor("#FF000A")
                .setDescription(`${user.username}`, true)
                .setThumbnail(`${user.avatarURL}`)
                .setTimestamp()
                .addField('Guild In', `${msg.guild.name}`, true)
                .addField('Reason', `${reason}`, true)
                user.sendEmbed(embed, {
                        disableEveryone: true
                });
                msg.channel.sendMessage(`***${user.username} has been soft-banned.***`)
                var embed = new Discord.RichEmbed();
                embed.setAuthor(`Moderator`, ` `)
                .setColor("#FF000A")
                .setDescription(`${msg.author.username}`, true)
                .setThumbnail(`${user.avatarURL}`)
                .setTimestamp()
                .addField('User Soft-banned', `${user.username}`, true).addField('Reason', `${reason}`, true)
                msg.guild.channels.find('name', 'mod-log').sendEmbed(embed, {
                        disableEveryone: true
                });
        });
}

    if (msg.content.startsWith(prefix + 'unban')) {
        var user = msg.mentions.users.first()
        var member = msg.guild.member;
        var reason = msg.content.split(' ').slice(2).join(' ');
        if (!msg.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
            return msg.channel.send("`ERROR:` I do not have permission to unban.");
        }
        msg.guild.fetchBans().then(users => {
            if (isNaN(msg.content.split(" ")[1])) {
                user = users.find('username', msg.content.split(" ")[1]);
            } else {
                user = users.get(msg.content.split(" ")[1]);
            }
            msg.guild.unban(user);
            // msg.user.sendMessage(`You have been unbanned from ${msg.guild.name}`)
            msg.channel.sendMessage(`${user.username} has been unbanned from the guild! :ok_hand::skin-tone-4:`)
            // var embed = new Discord.RichEmbed();
            // embed.addField(`Moderator`, `${msg.author.username}`, true)
            //     .setColor(0xFFF00)
            //     .setTimestamp()
            //     .addField('User Unbanned', `${user}`, true)
            // msg.guild.channels.find('name', 'mod-log').sendEmbed(
            //     embed, {
            //         disableEveryone: true
            //     }
            // );
        });
    }

if (command == "warn") {
        var reason = msg.content.split(' ').slice(2).join(' ');
        var user = msg.mentions.users.first();
        if (!user) return msg.channel.sendMessage('Please include a user to warn.');
        if (!reason) return msg.channel.sendMessage('Please include a reason.');
        var embed = new Discord.RichEmbed();
        embed.setAuthor(`Warning`, ` `)
        .setColor("#ECC31A")
        .setDescription(`${user.username}`, true)
        .setThumbnail(`${user.avatarURL}`)
        .setTimestamp()
        .addField('Guild In', `${msg.guild.name}`,true)
        .addField('Reason', `${reason}`, true)
        user.sendEmbed(embed, {
                disableEveryone: true
        });
        msg.channel.sendMessage(`***${user.username}*** ***Has been warned*** 👌`)
        var embed = new Discord.RichEmbed();
        embed.setAuthor(`Moderator`, ` `)
        .setColor("#ECC31A")
        .setDescription(`${msg.author.username}`, true)
        .setThumbnail(`${user.avatarURL}`)
        .setTimestamp()
        .addField('User Warned',`${user.username}`, true)
        .addField('Reason', `${reason}`, true)
        msg.guild.channels.find('name', 'mod-log').sendEmbed(embed, {
                disableEveryone: true
        });
}

 if (command == "ban") {
         var user = msg.mentions.users.first();
         var member = msg.guild.member(user);
         var reason = msg.content.split(' ').slice(2).join(' ');
         if (!user) return msg.channel.sendMessage('Please include a user to ban.');
         if (!reason) return msg.channel.sendMessage('Please include a reason.');
         if (!msg.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
            return msg.channel.send("`ERROR:` I do not have permission to ban.");
        }
         member.ban().then(() => {
                 var embed = new Discord.RichEmbed();
                 embed.setAuthor(`Banned`, ` `)
                 .setColor("#FF000A")
                 .setDescription(`${user.username}`, true)
                 .setThumbnail(`${user.avatarURL}`)
                 .setTimestamp().addField('Guild In',`${msg.guild.name}`, true)
                 .addField('Reason', `${reason}`, true)
                 user.sendEmbed(embed, {
                         disableEveryone: true
                 });
                 msg.channel.sendMessage(`***${user.username} has been banned.***`)
                 var embed = new Discord.RichEmbed();
                 embed.setAuthor(`Moderator`, ` `)
                 .setColor("#FF000A")
                 .setDescription(`${msg.author.username}`, true)
                 .setThumbnail(`${user.avatarURL}`)
                 .setTimestamp()
                 .addField('User Warned', `${user.username}`, true)
                 .addField('Reason', `${reason}`, true)
                 msg.guild.channels.find('name', 'mod-log').sendEmbed(embed, {
                         disableEveryone: true
                 });
         });
 }

 if (msg.content.startsWith(prefix + 'kick')) {
         var user = msg.mentions.users.first();
         var member = msg.guild.member(user);
         var reason = msg.content.split(' ').slice(2).join(' ');
         if (!user) return msg.channel.sendMessage('Please include a user to kick.');
         if (!reason) return msg.channel.sendMessage('Please include a reason.');
         if (!msg.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
            return msg.channel.send("`ERROR:` I do not have permission to kick.");
        }
         member.kick().then(() => {
                 var embed = new Discord.RichEmbed();
                 embed.setAuthor(`Kicked`, ` `)
                 .setColor("#B5E02C")
                 .setDescription(`${user.username}`, true)
                 .setThumbnail(`${user.avatarURL}`)
                 .setTimestamp().addField('Guild In',`${msg.guild.name}`, true)
                 .addField('Reason', `${reason}`, true)
                 user.sendEmbed(embed, {
                         disableEveryone: true
                 });
                 msg.channel.sendMessage(`***${user.username} has been kicked.***`)
                 var embed = new Discord.RichEmbed();
                 embed.setAuthor(`Moderator`, ` `)
                 .setColor("#B5E02C")
                 .setDescription(`${msg.author.username}`, true)
                 .setThumbnail(`${user.avatarURL}`)
                 .setTimestamp()
                 .addField('User Kicked', `${user.username}`, true)
                 .addField('Reason', `${reason}`, true)
                 msg.guild.channels.find('name', 'mod-log').sendEmbed(embed, {
                         disableEveryone: true
                 });
         });
 }

   if (msg.content.startsWith(prefix + 'avi')) {
  if (!msg.guild || !msg.member) return;
      // send the user's avatar URL
       msg.mentions.users.first();
	   msg.channel.sendMessage(msg.author.avatarURL);
       msg.channel.sendMessage("success")
    }

    if (msg.content.startsWith(prefix + "get")) {
    if (!msg.guild || !msg.member) return;
    var mention = msg.mentions.users.first();
    if (!mention) {
     return msg.channel.sendMessage("\`?\` | Mention a user.")
    }
    msg.reply(mention.avatarURL)
   }
	
	if (msg.content.toLowerCase().startsWith(prefix + "links")) {
    var embed = new Discord.RichEmbed();
    embed.addField('My Facebook Link', 'This is My Facebook link. Add me on [Facebook](http://www.facebook.com/BenchMigami)')
    .addField('Where to find Me', 'Here you where you find, just [click here](https://discord.gg/dfdvArY)')
	.addField('Another Server to find me', 'Another server you can find me, just [click here](https://discord.gg/8aKgYJx)')
    .setColor("#EEFD3F")
    msg.channel.sendEmbed(

            embed, {

                disableEveryone: true

            }

        );
}

if (msg.content.toLowerCase().startsWith(prefix + "learnjs")) {
    if(msg.author.bot) return;
    var embed = new Discord.RichEmbed();
    embed.setFooter('Javascript Code', ' ')
    .addField('Learning JavaScript', "**__Useful links for learning JavaScript and Node__**:\n\n**Codecademy online course**: https://www.codecademy.com/learn/javascript\n**Eloquent Javascript, free book**: http://eloquentjavascript.net/\n\n**Some Node**:\nhttp://nodeschool.io/\nhttps://www.codeschool.com/courses/real-time-web-with-node-js\n**Discord.js getting started guides**:\nhttps://www.youtube.com/channel/UCvQubaJPD0D-PSokbd5DAiw/videos\nhttps://www.youtube.com/channel/UCLun-hgcYUgNvCCj4sIa-jA/videos\n**Javascript reference/docs**: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference\n**discord.js documentation**: https://discord.js.org/#!/docs")
    .setColor("#EEFD3F")
    msg.channel.sendEmbed(
        embed, {
            disableEveryon: true
        }
    )
}

if (msg.content.toLowerCase().startsWith(prefix + "servers")) {
    msg.author.sendMessage("Here are the Verified Server\'s!")
    var embed = new Discord.RichEmbed();
    embed.addField('Server\'s', '- Pando\'s Hangout is where the support server for Pando https://discord.gg/R4AXuBM\n- Critical Ops Clans is a gaming Community https://discord.gg/8aKgYJx\n- Panda\'s Hangout is the server where JayBot made https://discord.gg/R4AXuBM\n- SUPR3M3 Official is the server a clan on Critical Ops https://discord.gg/FdudkNN')
    .setColor("#0099FF")
    msg.channel.sendEmbed(

            embed, {

                disableEveryone: true

            }

        );
}
	
    if (command == 'embed') {

        let noto = msg.content.split(" ").slice(1).join(" ");

        msg.delete();

        var embed = new Discord.RichEmbed();

        embed.setColor("#EEFD3F")

            .setDescription(noto)

        msg.channel.sendEmbed(

            embed, {

                disableEveryon: true

            }

        );

    }
});

bot.login(config.tokens);
