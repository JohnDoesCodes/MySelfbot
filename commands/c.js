const Discord = require("discord.js");
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
    message.delete()
embed.setAuthor("Channels")
.setDescription("The <#280285147805384704> is where all members conversation take place. The <#285246716582559744> is where all bot commands go. The #supports is for all support question you have about the server and the bot.")
.setImage("https://cdn.discordapp.com/attachments/248014822082347008/329237279879069699/chat.png")
.setColor("#87ceeb")
message.channel.sendEmbed(
            embed, {
                disableEveryone: true
            }
        );
}
