const Discord = require("discord.js");
exports.run = (client, message, args) => {
            var user = message.mentions.users.first()
        var member = message.guild.member;
        if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
            return message.channel.send("`ERROR:` I do not have permission to unban.");
        }
        message.guild.fetchBans().then(users => {
            if (isNaN(message.content.split(" ")[1])) {
                user = users.find('username', message.content.split(" ")[1]);
            } else {
                user = users.get(message.content.split(" ")[1]);
            }
            message.guild.unban(user);
        });
};