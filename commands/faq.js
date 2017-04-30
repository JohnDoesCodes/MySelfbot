const Discord = require("discord.js");
exports.run = (client, message, args) => {
        message.delete()
    var embed = new Discord.RichEmbed();
    embed.setFooter('Code Made by Johnツ#9897 | Credits: Leera#0037', ' ')
    .addField('Frequently Asked Questions', "User bots (bots using a user account) that are *not selfbots* are **__STRICTLY PROHIBITED__**, any found user bots will be instantly banned.\n**Selfbots** and **Userbots** are identically the same in functionality, but with a distinct difference, and this is what defines a selfbot.Selfbots are using an active users token, and it does not respond to other users, it only responds to itself due to this line of code;\n```if (<Message>.author.id !== <Client>.user.id) return;```\n\nOf course `<Message>` and `<Client>` been what you defined them in your code, and what that line does, is it looks for the author's user id, and if it doesn't match the accounts user id, it ignores any and all commands / messages.")
    .setColor("#FF0000")
    message.channel.sendEmbed(
        embed, {
            disableEveryon: true
        }
    )
};