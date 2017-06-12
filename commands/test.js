const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("Blocks Community", "https://cdn.discordapp.com/attachments/303099253260025858/310810037201141760/Blocks.png")
.setDescription("Blocks community, a well growing community based on gamers, we support teams and games as well as minor communities! we have special bots(some are paid too) and reputed bots made for well moderation we have specific zones for specific nees like games chat, bots chat(yes we pay for cleverbots) and spam and nsfw too! this will be fun to join! why waiting? join and hangout with gamers!")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/CjNjRDZ")
message.channel.send({embed})
}