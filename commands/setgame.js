const Discord = require("discord.js");
exports.run = (client, message) => {
const args = message.content.split(' ').slice(1).join(' ');
client.user.setGame(`${args}`);
embed.setDescription(`Your game has been set to \`${args}\``)
  .setAuthor('aeris#0018 Selfbot | Game Status', client.user.displayAvatarURL)
  .setColor("#AB1212")
  message.channel.sendEmbed(
            embed, {
                disableEveryone: true
            }
        );
}