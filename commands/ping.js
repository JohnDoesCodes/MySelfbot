const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let option = message.content.split(' ').splice(1).join(' ');
  message.delete();
  if(!option) 
        startTime = Date.now();
  message.channel.sendMessage("Pinging...").then((message) => {
            endTime = Date.now();
            message.edit(`Pong! \`${Math.round(endTime - startTime)}ms\``);
  })
  if (option.toLowerCase() === "help") {
message.channel.send("Ping: use to check if bot is alive.")
        }
}