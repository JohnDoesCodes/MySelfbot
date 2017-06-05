const Discord = require("discord.js");
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
    message.delete()
const res = client.users.filter(u => u.discriminator === `${args}`).map(u => u.username)
  if(res.length === 0) {
  embed.setDescription(`:x: **No users found matching discriminator ${args}.**`)
  .setColor("#AB1212")
  .setFooter(`$https://cdn.discordapp.com/attachments/306434811516682240/321289769424257024/Nepgear.png`, "aeris#0018 Selfbot")
  message.channel.sendEmbed(
            embed, {
                disableEveryone: true
            }
        );
  } else {
        embed.setDescription(`:mag_right: __**${res.length} users found with the discriminator ${args}**__:\n\n${res.join('\n')}`)
        .setColor("#2F79E2")
  message.channel.sendEmbed(
            embed, {
                disableEveryone: true
            }
        );
  }
}
