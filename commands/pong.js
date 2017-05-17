const Discord = require("discord.js");
exports.run = (client, message, args) => {
     message.delete();
     message.channel.sendMessage("Ping! Took \`101ms\` to ping <@255815122616844288>");
}