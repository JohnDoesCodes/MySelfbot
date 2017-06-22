const Discord = require("discord.js");
exports.run = (client, message, args) => {
            message.channel.send(`:rocket: Selfbot is resetting, please wait. :rocket:`).then(function(t) {
            process.exit(1);
        });
};
