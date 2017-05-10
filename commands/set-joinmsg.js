const Discord = require("discord.js");
exports.run = (client, message, args) => {
let args = message.content.split(' ').slice(2).join(' ');    
guilds[message.guild.id] = {
     joinmessage: args,
     channel: message.channel.id
}
fs.writeFile('guilds.json', JSON.stringify(guilds, null, 4), 'utf8', function(err) {
message.channel.send(`The welcome message has been set as \`${args}\``)
if (err) return;
});
if(guilds[message.guild.id].channel === message.channel.id) return message.channel.sendMessage(`:x: Welcome messages are already enabled in this channel.`)
guilds[message.guild.id].channel = `${message.channel.id}`;
}