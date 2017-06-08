const Discord = require("discord.js");
exports.run = (client, message, args) => {
embed.setColor("0x0099FF")
.setAuthor("aeris#0018 Selfbot | GIF", client.user.displayAvatarURL)
.setImage("https://media2.giphy.com/media/vFA7tz7WkEDXq/200.gif");
message.channel.sendEmbed(
            embed, {
                disableEveryone: true
            }
        );
}