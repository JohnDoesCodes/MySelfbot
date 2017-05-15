const Discord = require("discord.js");
exports.run = (client, message, args) => {
    var channel = message.channel.id
    var message = fetchMessage
    var ags = message.content.split(' ').slice(2).join(' ');
    if (!channel) return message.reply("Please give channel id")
    if (!message) return message.reply("Please give message id")
    if (!args) return message.reply("Give something to edit")
    message.edit(`${args}`)
}