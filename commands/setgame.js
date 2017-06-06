const Discord = require("discord.js");
exports.run = (client, message) => {
const args = message.content.split(' ').slice(1).join(' ');
client.user.setGame(`Your game has been set to \`${args}\``); {
    if (!args) return message.channel.send("Please set something for your setgame status!")
}
}