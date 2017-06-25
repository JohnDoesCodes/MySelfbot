const Discord = require("discord.js");
exports.run = (client, message, args) => {
	var suffix = message.content.split(' ').slice(1).join(' ');
client.guilds.map(g => g.members.get(client.user.id).setNickname(suffix))
}