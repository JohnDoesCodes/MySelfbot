const Discord = require("discord.js");
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
    message.delete()
    if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) {
            return message.channel.send("`ERROR:` I do not have permission to send Embed, contact administrator to get perm to send embed.");
        }
embed.setColor("0x0099FF")
.setAuthor("aeris#0018 Selfbot | Kill My Self", client.user.displayAvatarURL)
.setImage("https://media2.giphy.com/media/vFA7tz7WkEDXq/200.gif")
.setColor("#FE0101")
message.channel.sendEmbed(
            embed, {
                disableEveryone: true
            }
        );
}