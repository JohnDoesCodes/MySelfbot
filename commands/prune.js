const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let count = parseInt(args[0]) || 1;



    message.delete();

    message.channel.fetchMessages({ limit: Math.min(count, 100), before: message.id })

        .then(messages => {

            Promise.all(messages.map(m => m.delete()))

                .catch(message.error)

                .then(() => {

                    message.channel.send(`\u2705 Pruned \`${count}\` messages.`)

                        .then(m => m.delete(2000));

                });

        }).catch(message.error);
}