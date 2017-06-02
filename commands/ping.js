const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let option = message.content.split(' ').splice(1).join(' ');

  message.delete();
  if(!option) 
  message.channel.sendMessage("Pong!")
}

exports.help = {
  name: 'help',
  description: 'Displays all the available commands for your permission level.',
  usage: 'help [command]'
};
