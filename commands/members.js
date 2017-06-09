const Discord = require("discord.js");
exports.run = (client, message, args) => {
    message.channel.send(`There are ${message.guild.memberCount} members in ${message.guild.name}.`)
}