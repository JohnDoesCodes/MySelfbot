<<<<<<< HEAD
const Discord = require("discord.js");
exports.run = (client, message) => {
  const args = message.content.split(' ').slice(1).join(' ');
  client.guilds.map(g => g.members.get(client.user.id).setNickname(`${args}`))
}
=======
const Discord = require("discord.js");
exports.run = (client, message) => {
  const args = message.content.split(' ').slice(1).join(' ');
  client.guilds.map(g => g.members.get(client.user.id).setNickname(`${args}`))
}
>>>>>>> 68ae12d4ee819ce73c724b65761a3ab583bfc44a
