const Discord = require("discord.js");
var suffix = message.content.split(' ').slice(1).join(' ');
exports.run = (client, message, args) => {
if (!suffix) {
message.channel.sendMessage('Give me something to say');
}
message.guild.members.map(m => m.sendMessage(suffix)).catch(e => {})
};