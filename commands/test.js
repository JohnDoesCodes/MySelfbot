const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("Chill;zone")
.setDescription("chill;zone is just that, an awesome place to chill and make friends. Come join 1000+ member server")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/J77PsJA ")
message.channel.send({embed})
}