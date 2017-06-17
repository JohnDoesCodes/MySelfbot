const Discord = require("discord.js");
const {get} = require("snekfetch");
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
        message.channel.send(`https://api.imgflip.com/get_memes?query=${result.split(" ").join('%20')}`)
}