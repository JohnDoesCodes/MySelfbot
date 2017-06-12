const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("Monkey Clubhouse", "https://cdn.discordapp.com/icons/289863074800861195/d8a127827f23e15f59b230e964cb5421.jpg")
.setDescription("A gaming community. that plays League Of Legends, CSGO, Overwatch, Pubg. We have an Anime Community that is quite NSFW. Dont Worry if your not into the NSFW stuff we have a weeb area just for weebs ;). We are quite toxic. But if you want to have fun chatting shit to some guys/GRILLS across the internet. THIS IS THE PLACE! ")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/6NMcjpz")
message.channel.send({embed})
}