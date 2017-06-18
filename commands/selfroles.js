const Discord = require("discord.js");
exports.run = (client, message, args) => {
var embed = new Discord.RichEmbed();
embed.setAuthor("Colours", "https://cdn.discordapp.com/icons/280285147805384704/5e3a3f5a2a55921ccd7faa78386a3b4d.jpg")
.setDescription("**__Red__**\n**__Cyan__**\n**__Black__**\n**__Pink__**\n**__Green__**]\n**__Yellow__**")
.setImage("https://images-ext-2.discordapp.net/external/Y4JhF7wcnzW3Qf9LP9lCzol0CNoiFaeTJe2TJdqZRRc/http/wallpapercave.com/wp/64FfDEi.jpg?width=300&height=188")
.setColor("#53A6F3")
.setThumbnail("https://images-ext-2.discordapp.net/external/l1LE79QE8cU5wG7UMD9W-juq7SjA_4gbfbIzmFe87fA/https/www.prosci.com/media/wysiwyg/icons/icon-managers-dark.png?width=61&height=57")
.setImage("https://cdn.discordapp.com/attachments/301425329963270154/319121512177074176/obey_the_rules.jpg")
.setFooter("Type p!<colour> to apply for a colour; E.g, p!red. Type p!no<colour> to remove a role; e,g, p!nored.")
message.channel.sendEmbed(
            embed, {
                disableEveryone: true
            }
        ); 
}