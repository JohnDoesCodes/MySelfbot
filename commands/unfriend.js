exports.run = (client, message, args) => {
    message.delete()
            if (!message.mentions.users.first()) return message.edit('Failed to unfriend a bitch, check your deym codes.');
        message.mentions.users.first().removeFriend().then(() => {
            message.edit("About time to remove this bitch from my friends list.");
        })
};