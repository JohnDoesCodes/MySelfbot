const Discord = require("discord.js");
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
    message.delete()
embed.setAuthor("The list of \"Don\'t\" -s")
.setDescription("-Don't Text spam or COMPLETLY CONTROL THE MIC or you can get muted. :thumbsdown:\n-Don't advertise servers or anything else unless asked, even through PMs. :thumbsdown:\n-Don't have an offensive name or avatar and keep a legible name or nickname. :thumbsdown:")
.setImage("https://cdn.discordapp.com/attachments/248014822082347008/329235771183857666/lits.png")
.setColor("#00ff00")
message.channel.sendEmbed(
            embed, {
                disableEveryone: true
            }
        );
}
