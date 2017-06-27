const Discord = require("discord.js");
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
    message.delete()
embed.setAuthor("Need help?")
.setDescription("If you need help, ask in <#316597727691800580> as it is most likely to be seen there. I or any helper/Moderator will try to assist you. Feel free to openly approach us by mentioning the Supports, even in PM. However, we are busy a lot of the time, as currently each one of us has our own things to do, so spamming and impatience will lead to us getting angry.")
.setImage("https://cdn.discordapp.com/attachments/248014822082347008/329244411022016513/need_help.jpg")
.setColor("#adff2f")
message.channel.sendEmbed(
            embed, {
                disableEveryone: true
            }
        );
}
