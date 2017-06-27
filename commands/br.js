const Discord = require("discord.js");
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
    message.delete()
embed.setAuthor("Be Respectful")
.setDescription("There's no reason to be insulting. Understand the difference between banter and insults. Any and all signs of disrespect will not be tolerated.\nMods/Staff have the right to punish accordingly. :point_left: :ok_hand: Being obnoxious, annoying, childish, or a general attention seeker can you get you kicked without warning subjective to the secret police.")
.setImage("https://cdn.discordapp.com/attachments/248014822082347008/329234971430748160/index.jpg")
.setColor("#ffff00")
message.channel.sendEmbed(
            embed, {
                disableEveryone: true
            }
        );
}
