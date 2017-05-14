const Discord = require("discord.js");
exports.run = (client, message, args) => {
  message.delete()
        var embed = new Discord.RichEmbed();
        embed.setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL}`)
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/attachments/308137730141847552/313148092562145281/Pando.jpg")
        .setColor("#53A6F3")
        .addField('Pando\'s Hangout', "<About us>\nThis guild is a help support for everyone that need help about Pando bot and the other main bots. We can discuss anything except againts the rules and mostly importantly have fun. Mainly, this server is used as a help server, where we talk about our main bots.\n```")
        .addField('Invite Link', "https://discord.gg/dfdvArY");
        message.channel.sendEmbed(
            embed, {
                disableEveryone: true
            }
        );
} 