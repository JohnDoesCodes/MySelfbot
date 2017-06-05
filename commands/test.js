  const Discord = require("discord.js");
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
    message.delete()
const res = client.users.filter(u => u.discriminator === `${args}`).map(u => u.username)
  if(res.length === 0) {
embed.setDescription(`No users found with ${args}`)
.setAuthor('Leera Selfbot | Discrim Seeker', client.user.displayAvatarURL)
.setColor(0xFF0ed4)
.setTimestamp();
  message.channel.send({ embed })
  } else {
embed.setDescription(`Users Found With ${args}`, res)           
.setAuthor('Leera Selfbot | Discrim Seeker', client.user.displayAvatarURL)
.setColor(0xFF0ed4)
.setTimestamp();
message.channel.send({ embed })
  }
}