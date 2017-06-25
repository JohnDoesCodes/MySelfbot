const Discord = require("discord.js");
exports.run = (client, message, args) => {
    message.delete()
  var embed = new Discord.RichEmbed();
  embed.setAuthor('Commands | Message will self disrupt in 30 seconds', `${message.author.displayAvatarURL}`)
  .addField('Owner', '[selfsource](https://discord.gg/dfdvArY) - Selfbot source code.\n[selfeval](https://discord.gg/dfdvArY) - Runs javascript code.\n[selfrestart](https://discord.gg/dfdvArY) - Restart the selfbot.\n[selfgm](https://discord.gg/dfdvArY) - Message members in a server.\n[selffriend](https://discord.gg/dfdvArY) - Add friend a user\n[selfunfriend](https://discord.gg/dfdvArY) - Unfriend a user.\n[selfblock](https://discord.gg/dfdvArY) - Block a user.\n[selfunblock](https://discord.gg/dfdvArY) - Unblock a user.\n[selfsearch](https://discord.gg/dfdvArY) - Search message.\n[selfembed](https://discord.gg/dfdvArY) - Text embed.\n[selfquote](https://discord.gg/dfdvArY) - Quote a message.\n[selfcb](https://discord.gg/dfdvArY) - CodeBlock.\n[selfgoogle](https://discord.gg/dfdvArY) - Google stuff.\n[selfurban](https://discord.gg/dfdvArY) - Urban.\n[selfdiscrim](https://discord.gg/dfdvArY) - Discrim search.')
  .setColor("#53A6F3")
  message.channel.sendEmbed(
            embed, {
                disableEveryone: true 
            }
        ).then(message => message.delete(30000));
}
