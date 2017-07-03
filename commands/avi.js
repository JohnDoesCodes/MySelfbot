<<<<<<< HEAD
const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if (!message.guild || !message.member) return;
  message.mentions.users.first();
  message.channel.send(message.author.avatarURL);
};
=======
const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if (!message.guild || !message.member) return;
  message.mentions.users.first();
  message.channel.send(message.author.avatarURL);
};
>>>>>>> 68ae12d4ee819ce73c724b65761a3ab583bfc44a
