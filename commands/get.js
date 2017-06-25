const Discord = require("discord.js");
exports.run = (client, message, args) => {
        if (!message.guild || !message.member) return;
    var mention = message.mentions.users.first();
    if (!mention) {
     return message.channel.send("\`❌\` | Mention a user.")
    }
    message.user.send(mention.avatarURL)
};
