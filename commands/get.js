<<<<<<< HEAD
const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if (!message.guild || !message.member) return;
  var mention = message.mentions.users.first();
  if (!mention) {
    return message.channel.send("\`?\` | Mention a user.")
  }
  message.channel.send(mention.avatarURL)
};
=======
const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if (!message.guild || !message.member) return;
  var mention = message.mentions.users.first();
  if (!mention) {
    return message.channel.send("\`?\` | Mention a user.")
  }
  message.channel.send(mention.avatarURL)
};
>>>>>>> 68ae12d4ee819ce73c724b65761a3ab583bfc44a
