const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("Clash Royale Global (CRG)", "https://images-ext-2.discordapp.net/external/HG4E9uWzQjBijDwu8qV8zffnZcOOOVwuD5_YMiytr70/http/site-449644.mozfiles.com/files/449644/logo-1.png")
.setDescription("Clash Royale Global is a discord server that's about all things clash royale! Ranging from Clash Royale artworks, strategy, clan recruitment, small youtubers and fun discussions! We host and scout many tournaments for the members of the server. Join now!")
.setThumbnail("https://images-ext-1.discordapp.net/external/7YD_pHXGcVn7VkJ878hpQVcRR1Hv25kuRGMeTCmzVO4/http/vignette2.wikia.nocookie.net/clashroyale/images/7/76/Gg.png")
.addField("Server Invite", "https://discord.gg/dwtEpKx")
.setColor(randomcolor())
message.channel.send({embed})
} 