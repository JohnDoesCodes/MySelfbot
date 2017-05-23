const Discord = require("discord.js");
exports.run = (client, message, args) => {
    var argresult = message.content.split(' ').slice(2).join(' ');
    client.author.setGame(argresult); {
        return message.channel.send("Done!")
    }
}