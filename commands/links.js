const Discord = require("discord.js");
exports.run = (client, message, args) => {
        var embed = new Discord.RichEmbed();
        embed.setFooter('Johnツ#9897', ' ')
    addField('My links', '[Click here](http://www.facebook.com/BenchMigami) to see my Facebook profile and send me a friend request. If you want to find me on discord just [click here](https://discord.gg/dfdvArY) to join my server. Here is my other server to join in, just [click here](https://discord.gg/8aKgYJx).')
    .setColor("#EEFD3F")
    message.channel.sendEmbed(

            embed, {

                disableEveryone: true

            }

        );
};