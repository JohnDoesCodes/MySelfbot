const Discord = require("discord.js");
const {get} = require("snekfetch");
var embed = new Discord.RichEmbed();
let memes = "https://api.imgflip.com/get_memes"
exports.run = (client, message, args) => {
    get(memes).then(response => {
        embed.setImage(response.body.file)
        .setColor("#2FADE5")
        message.channel.send({embed})
});
}
