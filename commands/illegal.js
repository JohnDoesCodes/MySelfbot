const Discord = require("discord.js");
const request = require('request');
exports.run = (client, message, args) => {
message.delete();
message.channel.sendFile(`https://martmists.tk/api/v1/illegal?query=${args.join(' ')('%20')}`, 'file.gif')
}