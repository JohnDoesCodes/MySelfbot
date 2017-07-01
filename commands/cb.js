const Discord = require("discord.js");
exports.run = (client, message, args) => {
  var cb = message.content.split(" ").slice(1).join(" ");
  message.delete();
  message.channel.send("```js\n" + cb + "\n```");

};
