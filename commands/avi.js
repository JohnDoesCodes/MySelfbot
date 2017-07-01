const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if (!message.guild || !message.member) return;
  message.mentions.users.first();
  message.channel.send(message.author.avatarURL);
};
