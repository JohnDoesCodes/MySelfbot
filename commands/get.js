const Discord = require("discord.js");
exports.run = (client, message, args) => {
        if (!message.guild || !message.member) return;
    var mention = message.mentions.users.first();
    if (!mention) {
     return message.channel.send("\`❌\` | Mention a user.")
    }
    console.log(mention.avatarURL).catch((err) => {message.channel.send(`:warning: **An error occurred.**\n${err}`); console.log(err)});
};
