const Discord = require("discord.js");
exports.run = (client, message, args) => {
    message.delete()
    if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) {
            return message.channel.send("`ERROR:` I do not have permission to send Embed, contact administrator to get perm to send embed.");
        }
    var embed = new Discord.RichEmbed();
    embed.setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL}`)
    .setTimestamp()
    .addField('Info', 'This selfbot is multipurposed bot owns by aeris#0018.')
    .addField('Github Source', `Click this [link](https://github.com/JohnDoesCodes/MySelfbot) for the selfbot codes.`);
    .setColor("#53A6F3")
message.channel.sendEmbed(
            embed, {
                disableEveryone: true
            }
        );
}
