const Discord = require("discord.js");
exports.run = (client, message, args) => {
var embed = new Discord.RichEmbed();
embed.setAuthor("Welcome to Aeris Discord")
.setDescription("```xml\n<About us>\nThis guild is a help support for everyone that need help about our main bots. We can discuss anything except againts the rules and mostly importantly have fun. Mainly, this server is used as a help server, where we talk about our main bots.\n```")
message.channel.sendEmbed(
            embed, {
                disableEveryone: true
            }
        ); 
}