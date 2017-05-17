const Discord = require("discord.js");
exports.run = (client, message, args) => {
    message.delete()
    if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) {
            return message.channel.send("`ERROR:` I do not have permission to send Embed, contact administrator to get perm to send embed.");
        }
        var embed = new Discord.RichEmbed();
     embed.setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL}`)
    .addField('My links', '[Click here](http://www.facebook.com/BenchMigami) to see my Facebook profile and send me a friend request. If you want to find me on discord just [click here](https://discord.gg/dfdvArY) to join my server. Here is my other server to join in, just [click here](https://discord.gg/8aKgYJx).')
    .setColor("#53A6F3")
    .setTimestamp()
    message.channel.sendEmbed(

            embed, {

                disableEveryone: true

            }

        );
};