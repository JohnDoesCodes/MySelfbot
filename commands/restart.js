const Discord = require("discord.js");
exports.run = (client, message, args) => {
            message.channel.sendMessage(`:rocket: Selfclient is resetting, please wait. :rocket:`).then(function(t) {
            process.exit(1);
        });
};