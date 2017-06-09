const Discord = require("discord.js");
exports.run = (client, message, args) => {
    messsage.delete()
    message.channel.send(`There are ${message.guild.memberCount} members in ${message.guild.name} and the owner is ${message.guild.owner.user.tag}.`)
}