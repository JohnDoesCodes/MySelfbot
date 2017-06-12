const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("LovehomePorn(+18)", "https://cdn.discordapp.com/icons/312026248274771968/4e9bcd741472e52600bb7f88d647937e.jpg")
.setDescription("Be sure to join our Porn server, We have +70 channels  (Voice/chat)\n-Hentai\n-milf\n-gays and lesbians\n-anal\n-porn stories\nAnd MORE MORE...\nGiveaways and some some\nCome join and have fun get new friends\nWe trying to growing our Community\nJoin and Help us ")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/dVcWT6x")
message.channel.send({embed})
}