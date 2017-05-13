const Discord = require("discord.js");
exports.run = (client, message, args) => {
      if (!message.guild || !message.member) return;
       message.mentions.users.first();
	   message.channel.sendMessage(message.author.avatarURL);
};