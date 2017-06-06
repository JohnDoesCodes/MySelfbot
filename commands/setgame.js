const Discord = require("discord.js");
exports.run = (client, message) => {
const args = message.content.split(' ').slice(1).join(' ');
client.user.setGame(`${args}`); {
    if (!args) return message.channel.send("Please set something for your setgame status!")
}
message.channel.send(`Your game has been set to \`${args}\``)
}