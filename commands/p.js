const Discord = require("discord.js");
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
    message.delete()
embed.setAuthor("Partner Server")
.setDescription("**Requirments for partnership:**\n200+ members or more\nFriendly community\nMake sure you are the owner of the server that partnering us\nActive user base\nInvite one of our main bots")
.setImage("https://cdn.discordapp.com/attachments/248014822082347008/329252687478652928/partner.jpg")
.setColor("#ffb6c1")
message.channel.sendEmbed(
            embed, {
                disableEveryone: true
            }
        );
}
