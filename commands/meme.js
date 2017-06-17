const Discord = require("discord.js");
const {get} = require("snekfetch");
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
    get("https://api.imgflip.com/get_memes").then(response => {
        message.channel.send(response.body.file)
});
}