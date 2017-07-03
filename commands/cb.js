<<<<<<< HEAD
const Discord = require("discord.js");
exports.run = (client, message, args) => {
  var cb = message.content.split(" ").slice(1).join(" ");
  message.delete();
  message.channel.send("```js\n" + cb + "\n```");

};
=======
const Discord = require("discord.js");
exports.run = (client, message, args) => {
  var cb = message.content.split(" ").slice(1).join(" ");
  message.delete();
  message.channel.send("```js\n" + cb + "\n```");

};
>>>>>>> 68ae12d4ee819ce73c724b65761a3ab583bfc44a
