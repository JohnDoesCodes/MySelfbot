<<<<<<< HEAD
const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if (!message.mentions.users.first()) return message.edit('Failed to blocked a bitch, check your codes.');

  message.mentions.users.first().block().then(() => {
    message.edit("Bitch has bee blocked!");
  })
};
=======
const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if (!message.mentions.users.first()) return message.edit('Failed to blocked a bitch, check your codes.');

  message.mentions.users.first().block().then(() => {
    message.edit("Bitch has bee blocked!");
  })
};
>>>>>>> 68ae12d4ee819ce73c724b65761a3ab583bfc44a
