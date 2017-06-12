const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("ΙԲ עﾷȗ ΔЯﾼ ЯﾼΔdΙﾢɢ ȚￃΙଌ ΙȚଌ Țﾷ ﾤΔȚﾼ lel :)")
.setDescription("This server is basically one of its kind. The discord has friendly people that'll welcome you and treat you like a family. This certain discord has many different and unique roles that you'll never be bored. It has a diverse community and many bots for your enjoyment. So join today!!")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/NgU6EfT")
message.channel.send({embed})
}