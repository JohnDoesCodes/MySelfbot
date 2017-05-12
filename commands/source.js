const Discord = require("discord.js");
exports.run = (client, message, args) => {
    var embed = new Discord.RichEmbed();
    embed.setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL}`)
    .setTimestamp()
    .addField('Info', 'This selfbot owns by aeris#9897, give credits.')
    .addField('Github Source', `Click this [link](https://github.com/JohnDoesCodes) for the selfbot codes.`)
message.channel.sendEmbed(
            embed, {
                disableEveryone: true
            }
        );
}