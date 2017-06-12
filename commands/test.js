const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("AyyMD")
.setDescription("Don't want to burn your house down with Novideo GPUs or Shintel CPUs? Then AyyMD is the right place for you! From dank memes to mocking silly Nvidiots, we have it all. We are a satirical PC hardware community dedicated to proving that AMD is clearly the better choice. Everyone is welcome, including non-AMD fanboys.")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/AyyMD", true)
.addField("Subreddit", "https://www.reddit.com/r/AyyMD/")
message.channel.send({embed})
}