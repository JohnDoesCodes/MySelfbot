const Discord = require("discord.js");
exports.run = (client, message, args) => {
        var embed = new Discord.RichEmbed();
    embed.addField('My Facebook Link', 'This is My Facebook link. Add me on [Facebook](http://www.facebook.com/BenchMigami)')
    .addField('Where to find Me', 'Here is a server where find, just [click here](https://discord.gg/dfdvArY)')
	.addField('Another Server to find me', 'Here is a lit server where you can find me, just [click here](https://discord.gg/8aKgYJx)')
    .setColor("#EEFD3F")
    message.channel.sendEmbed(

            embed, {

                disableEveryone: true

            }

        );
};