const Discord = require("discord.js");
exports.run = (client, message, args) => {
        if (!message.guild || !message.member) return;
    var mention = message.mentions.users.first();
    if (!mention) {
     return message.channel.sendMessage(":x:| Mention a user.")
    }
    message.channel.sendMessage(mention.avatarURL)
};