exports.run = (client, message, args) => {
            var amount = parseInt(args[1]);
        message.channel.fetchMessages({
                limit: amount
            })
            .then(messages => {
                messages.map(message => message.delete().catch(console.error));
            }).catch(console.error);
};