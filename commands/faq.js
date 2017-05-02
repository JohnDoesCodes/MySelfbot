const Discord = require("discord.js");
exports.run = (client, message, args) => {
message.channel.sendMessage("```asciidoc\n= What is a selfbot? =\n```\n\nFirst, let's define what a **userbot** is. A Userbot is a bot that is running under a user account, instead of a true bot account.")
};
//"A Userbot is a bot that is running under a user account, instead of a true bot account. Userbots do not have the blue [BOT] tag next to them and they are not accepted by Discord as a valid way to make bots. At least, not since they introduced bot accounts under their Discord Applications page.\n\nOn the other hand, a **selfbot** runs under an active user account. In other words, your account. When it posts a message, it's like you did. It can edit and delete your messages, has the same permissions you have, is on the same servers. It's you.\n\n```asciidoc\n= What are the rules for selfbots?\n```\n\nA selfbot **__must not under any circumstance__**\n\n• respond to other user's messages. This means it should not respond to commands, should not autoreply to certain keywords, etc.\n**__You must be the only one that can control it.__**\n\n • do 'invite scraping'. This is the action of detecting server invites in chat, and automatically joining a server using that invite. That is akin to creating a virus, and it is not acceptable.\n\nAs selfbots run under your account they are subject to the same Terms of Service. That is to say, They have to follow the same rules that you follow."