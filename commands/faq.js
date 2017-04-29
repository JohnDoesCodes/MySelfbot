const Discord = require("discord.js");
exports.run = (client, message, args) => {
        message.delete()
    var embed = new Discord.RichEmbed();
    embed.setFooter('Code Made by Johnツ#9897 | Credits: Leera#0037', ' ')
    .addField('Frequently Asked Questions', "// A bot under a user account. For example it is an userbot when others can use it. It becomes a selfbot when you put this line of code. `if (message.author.id !== client.user.id) return`")
    .setColor("#EEFD3F")
    message.channel.sendEmbed(
        embed, {
            disableEveryon: true
        }
    )
};