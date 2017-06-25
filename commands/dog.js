const Discord = require("discord.js");
const {get} = require("snekfetch");
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
    get("https://random.dog/c65d2437-922f-4aed-80cf-39184b5c44b8.mp4").then(response => {
        embed.setImage(response.body.file)
        .setColor("#2FADE5")
        message.channel.send({embed})
});
}
