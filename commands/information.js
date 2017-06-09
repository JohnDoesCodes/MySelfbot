const Discord = require("discord.js");
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
    messag.delete()
embed.setAuthor("Welcome to Aeris Discord", "https://cdn.discordapp.com/attachments/248014822082347008/322691939751297025/information.png")
.setDescription("```xml\n<About us>\nThis guild is a help support for everyone that need help about our main bots. We can discuss anything except againts the rules and mostly importantly have fun. Mainly, this server is used as a help server, where we talk about our main bots.\n```\n```xml\n<How it works>If you need help, ask in #general as it is most likely to be seen there. I or any helper/Mod/Server Staff will try to assist you. Feel free to openly approach us by mentioning the Supports, even in PM. However, we are busy a lot of the time, as currently each one of us has our own things to do, so spamming and impatience will lead to us getting angry.\n```")
message.channel.sendEmbed(
            embed, {
                disableEveryone: true
            }
        ); 
}