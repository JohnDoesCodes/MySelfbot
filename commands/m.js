const Discord = require("discord.js");
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
    message.delete()
embed.setAuthor("Modeartion System")
.setDescription("We are now working with a 3 warning system.\n1st Warning: Warning.\n2nd Kick: kicked.\n3rd Ban: Banned(Can be appeal).\n4th Final Ban: Banned without ban appeal.")
.setImage("https://cdn.discordapp.com/attachments/248014822082347008/329240733749870592/Mod_system.png")
.setThumbnail("https://cdn.discordapp.com/attachments/248014822082347008/329240606796808193/Mod.png")
.setColor("ffb6c1")
message.channel.sendEmbed(
            embed, {
                disableEveryone: true
            }
        );
}
