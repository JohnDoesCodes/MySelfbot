const Discord = require('discord.js');
let embed = new Discord.RichEmbed();
exports.run = (client, message) => {
message.delete();
let args = message.content.split(' ').splice(1).join(' ');
const res = self.users.filter(u => u.discriminator === `${args}`).map(u => u.username);
  if(res.length === 0) {
embed.setDescription(`No users found with ${args}`)
.setColor(0xFF0ed4)
.setTimestamp();
  message.channel.send({ embed })
  } else {
embed.setDescription(`**Users Found With ${args}**\n${res.join('\n')}`)
.setColor("#53A6F3")
.setTimestamp();
message.channel.send({ embed })
  }
}
