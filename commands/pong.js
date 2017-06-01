const Discord = require("discord.js");
exports.run = (client, message, args) => {
message.delete()
var msg1 = message.guild.members.map(m => m).join('\n');
message.channel.send(msg1, {split: true, disableEveryone: true}).then(msg => msg.delete());
}