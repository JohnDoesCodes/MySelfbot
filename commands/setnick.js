const Discord = require("discord.js");
exports.run = (client, message) => {
const args = message.content.split(' ').slice(1).join(' ');
client.guilds.map(g => g.members.get(client.user.id).setNickname(`${args}`))
}