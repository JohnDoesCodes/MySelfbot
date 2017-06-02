const Discord = require("discord.js");
exports.run = (client, message, args) => {
let option = message.content.split(' ').splice(1).join(' ');
let config = require('../config');
let prefix = config.prefix;

message.delete();
if(!option) 
var embed = new Discord.RichEmbed();
embed.setColor(0xFF0e44)
.setAuthor('Selfbot Help | Catagories')
.addField('Utility', 'Utility commands', true)
.addField('Moderation', 'Moderation Commands', true)
.setDescription(`Type \`${prefix}\`help [catagory] for more help.`)
.setThumbnail(self.user.displayAvatarURL)
.setFooter('Selfbot Made By Leera#0037')
.setTimestamp();
message.channel.send({ embed })
if (option.toLowerCase() === "moderation") {
var embed2 = new Discord.RichEmbed();    
embed2.setColor(0xFF0e44)
.setAuthor('Selfbot Help | Sometext here')
.addField('Ping', 'Sends a response to the websocket and the latency back to the discord channel.', true)
.addField('Purge - Clear', 'Purge messages in the channel. Clear your own messages in the channel.', true)
.addField('Setgame - Stream', 'Set a game status. Set a streaming status', true)
.addField('Eval', 'Evaluate code in JavaScript', true)
.setThumbnail(self.user.displayAvatarURL)
.setFooter('Selfbot Made By Leera#0037')
.setTimestamp();
message.channel.send({ embed2 })
        } else {
if (option.toLowerCase() === "utility") {     
var embed3 = new Discord.RichEmbed();    
embed3.setColor(0xFF0e44)
.setAuthor('Selfbot Help | Sometext here')
.addField('Ping', 'Sends a response to the websocket and the latency back to the discord channel.', true)
.addField('Purge - Clear', 'Purge messages in the channel. Clear your own messages in the channel.', true)
.addField('Setgame - Stream', 'Set a game status. Set a streaming status', true)
.addField('Eval', 'Evaluate code in JavaScript', true)
.setThumbnail(self.user.displayAvatarURL)
.setFooter('Selfbot Made By Leera#0037')
.setTimestamp();
message.channel.send({ embed3 })    
        } else {
if (option.toLowerCase() === "test") {
var embed4 = new Discord.RichEmbed();    
embed4.setColor(0xFF0e44)
.setAuthor('Selfbot Help | Sometext here')
.addField('Ping', 'Sends a response to the websocket and the latency back to the discord channel.', true)
.addField('Purge - Clear', 'Purge messages in the channel. Clear your own messages in the channel.', true)
.addField('Setgame - Stream', 'Set a game status. Set a streaming status', true)
.addField('Eval', 'Evaluate code in JavaScript', true)
.setThumbnail(self.user.displayAvatarURL)
.setFooter('Selfbot Made By Leera#0037')
.setTimestamp();
message.channel.send({ embed4 })    
            }
        }
    }
};    