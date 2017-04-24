exports.run = (client, message, args) => {
            if (!message.mentions.users.first()) return message.edit('Failed to unfriend a bitch, check your deym codes.');
        message.delete()
        message.mentions.users.first().removeFriend().then(() => {
            message.edit("About time to remove this bitch from my friends list.");
        })
};