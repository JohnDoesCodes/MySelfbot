const Discord = require("discord.js");
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
    message.delete()
embed.setAuthor("Colours", "https://cdn.discordapp.com/attachments/248014822082347008/322691939751297025/information.png")
.setDescription("**__Cyan__**\n\n**__Red__**\n\n**__Blue__**\n\n*__Pink__**\n\n**__Black__**\n\n**__Green__**\n\n**__Lime__**\n\n**__Yellow__**\n\n**__Orange__**\n\n**__Purple__**\n\n**__Plum__**\n\n**__og(Ocean Blue)__**\n\n")
.setFooter("Type p!<colour> to apply for a colour; E.g, p!red. Type p!no<colour> to remove a role; e,g, p!nored.")
.setThumbnail("https://images-ext-1.discordapp.net/external/1Tsc626F0a9wLaAxMcEaGAasJn5GTc4W1OjwjNEe2As/%3Fwidth%3D61%26height%3D57/https/images-ext-2.discordapp.net/external/l1LE79QE8cU5wG7UMD9W-juq7SjA_4gbfbIzmFe87fA/https/www.prosci.com/media/wysiwyg/icons/icon-managers-dark.png?width=46&height=43")
.setImage("https://images-ext-2.discordapp.net/external/LslVhiwxxe8fN7FVX7HQPEVMFcOoF-Rw3PklIMKl4A4/%3Fwidth%3D300%26height%3D188/https/images-ext-2.discordapp.net/external/Y4JhF7wcnzW3Qf9LP9lCzol0CNoiFaeTJe2TJdqZRRc/http/wallpapercave.com/wp/64FfDEi.jpg?width=225&height=141")
.setColor("#7AE85C")
message.channel.sendEmbed(
            embed, {
                disableEveryone: true
            }
        );
}
