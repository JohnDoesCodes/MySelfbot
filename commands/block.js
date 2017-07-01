const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if (!message.mentions.users.first()) return message.edit('Failed to blocked a bitch, check your codes.');

  message.mentions.users.first().block().then(() => {
    message.edit("Bitch has bee blocked!");
  })
};
