const Discord = require("discord.js");
exports.run = (client, message, args) => {
            message.channel.sendMessage(`:rocket: Selfbot is resetting, please wait. :rocket:`).then(function(t) {
            process.exit(1);
        });
};