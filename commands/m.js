const Discord = require("discord.js");
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
    message.delete()
embed.setAuthor("Moderation System")
.setDescription("We are now working with a 3 warning system.\n**1st Warning:** Warning.\n**2nd Kick:** kicked.\n**3rd Ban:** Banned(Can be appeal).\n**4th Final Ban:** Banned without ban appeal.")
.setImage("https://cdn.discordapp.com/attachments/248014822082347008/329240733749870592/Mod_system.png")
.setThumbnail("https://cdn.discordapp.com/attachments/248014822082347008/329240606796808193/Mod.png")
.setColor("#ff0000")
message.channel.sendEmbed(
            embed, {
                disableEveryone: true
            }
        );
}
