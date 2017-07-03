<<<<<<< HEAD
const Discord = require("discord.js");
exports.run = (client, message, args) => {
  message.delete();
  startTime = Date.now();
  message.channel.send("Pinging...").then((message) => {
    endTime = Date.now();
    message.edit(`Pong! \`${Math.round(endTime - startTime)}ms\``);
  });
}
=======
const Discord = require("discord.js");
exports.run = (client, message, args) => {
  message.delete();
  startTime = Date.now();
  message.channel.send("Pinging...").then((message) => {
    endTime = Date.now();
    message.edit(`Pong! \`${Math.round(endTime - startTime)}ms\``);
  });
}
>>>>>>> 68ae12d4ee819ce73c724b65761a3ab583bfc44a
