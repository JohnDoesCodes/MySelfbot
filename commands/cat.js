<<<<<<< HEAD
const Discord = require("discord.js");
const {get} = require("snekfetch");
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
  get("https://random.cat/meow").then(response => {
    embed.setImage(response.body.file)
    .setColor("#2FADE5")
    message.channel.send({embed})
  });
}
=======
const Discord = require("discord.js");
const {get} = require("snekfetch");
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
  get("https://random.cat/meow").then(response => {
    embed.setImage(response.body.file)
    .setColor("#2FADE5")
    message.channel.send({embed})
  });
}
>>>>>>> 68ae12d4ee819ce73c724b65761a3ab583bfc44a
