const Discord = require("discord.js");
exports.run = (client, message, args) => {
            let noto = message.content.split(" ").slice(1).join(" ");

        message.delete();

        var embed = new Discord.RichEmbed();

        embed.setColor("#53A6F3")

            .setDescription(noto)

        message.channel.sendEmbed(

            embed, {

                disableEveryon: true

            }

        );
};