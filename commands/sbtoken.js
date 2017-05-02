const Discord = require("discord.js");
exports.run = (client, message, args) => {
    message.channel.sendMessage("If you want to create a selfbot, you will need your user login token.\nWhat is a user login token you ask? It's basically your login credentials, your username and password, **DO NOT** give this token out to anyone, not even your dear sweet grandma.\nEssentially, with your token they can become you, they can get your account terminated.\nNow we've got that out of the way, you need to open up the developers tools and follow these steps: http://i.imgur.com/cODKB5e.png.")
};