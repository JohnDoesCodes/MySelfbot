const Discord = require("discord.js");
exports.run = (client, message, args) => {
message.delete();
var embed = new Discord.RichEmbed();
embed.setColor(0xFF0e44)
.setAuthor('Selfbot Help | Message will self disrupt in 30 seconds')
.addField('Ping', 'Sends a response to the websocket and the latency back to the discord channel.', true)
.addField('Purge - Clear', 'Purge messages in the channel. Clear your own messages in the channel.', true)
.addField('Setgame - Stream', 'Set a game status. Set a streaming status', true)
.addField('Eval', 'Evaluate code in JavaScript', true)
.setThumbnail(self.user.displayAvatarURL)
.setFooter('Selfbot Made By Leera#0037')
.setTimestamp();
message.channel.send({ embed }).then(msg => msg.delete(30000));
};    