const Discord = require("discord.js");
const request = require('request');
exports.run = (client, message) => {
let args = message.content.split(' ').slice(1);

var result = args.join(' ');

      message.channel.send(`http://martmists.tk/api/v1/illegal?query=${result.split(" ").join('%20')}`)
}