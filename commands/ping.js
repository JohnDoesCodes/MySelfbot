const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let option = message.content.split(' ').splice(1).join(' ');

  message.delete();
  if(!option) 
  message.channel.sendMessage("Pong")
if (option.toLowerCase() === "help") {
message.channel.send("Ping: use to check if bot is alive.")
        }
}