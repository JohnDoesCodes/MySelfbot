const Discord = require("discord.js");
const request = require('request');
var embed = new Discord.RichEmbed();
exports.run = (client, message) => {
let args = message.content.split(' ').slice(1);
var result = args.join(' ');
        message.channel.send(`https://api.imgflip.com/get_memes?query=${result.split(" ").join('%20')}`)
}