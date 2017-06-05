const Discord = require("discord.js");
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
const res = client.users.filter(u => u.discriminator === `${args}`).map(u => u.username)
  if(res.length === 0) {
  embed.setDescription(`:x: **No users found matching discriminator ${args}.**`)
  message.channel.sendEmbed(
            embed, {
                disableEveryone: true
            }
        );
  }
        embed.setDescription(`:mag_right: __**${res.length} users found with the discriminator ${args}**__:\n\n${res.join('\n')}`)
  message.channel.sendEmbed(
            embed, {
                disableEveryone: true
            }
        );
}
