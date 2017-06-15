const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("Neko high", "https://cdn.discordapp.com/icons/317499278383644672/b0900eaf7b7ad6fbcff556685eef9d1c.jpg")
.setDescription("You may have come from the most wealthy families, you may come from the poorest of the poor. You and the others have many differences, but at this boarding school. We unite as one. This place is where supernatural, humans, angels and demons are harmonized and trained for battle. We are a fun community with tons of fun stuff to go too.")
.addField("Server Invite", "https://discord.gg/SuxK2KJ")
.setColor(randomcolor())
message.channel.send({embed})
}