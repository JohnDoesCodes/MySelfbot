const Discord = require("discord.js");
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
    message.delete()
embed.setAuthor("Colours", "https://cdn.discordapp.com/attachments/248014822082347008/322691939751297025/information.png")
.setDescription("**__Cyan__**\n\n**__Red__**\n\n**__Blue__**\n\n*__Pink__**\n\n**__Black__**\n\n**__Green__**\n\n**__Lime__**\n\n**__Yellow__**\n\n**__Orange__**\n\n**__Purple__**\n\n**__Plum__**\n\n**__og(Ocean Blue)__**\n\n")
.setFooter("Type p!<colour> to apply for a colour; E.g, p!red. Type p!no<colour> to remove a role; e,g, p!nored.")
.setThumbnail("https://cdn.discordapp.com/attachments/248014822082347008/329229145881968642/icon-managers-dark.png")
.setImage("https://cdn.discordapp.com/attachments/248014822082347008/329229113380569088/64FfDEi.jpg")
.setColor("#53A6F3")
message.channel.sendEmbed(
            embed, {
                disableEveryone: true
            }
        );
}
