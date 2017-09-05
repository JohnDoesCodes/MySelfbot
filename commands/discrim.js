const Discord = require('discord.js');
let embed = new Discord.RichEmbed();
exports.run = (client, message) => {
  message.delete();
  let args = message.content.split(" ").splice(1).join(" ");
  const res = client.users.filter(u => u.discriminator === `${args}`).map(u => u.username);
  if(res.length === 0) {
    embed.setAuthor(`No users found with ${args}`)
    .setColor("#53A6F3")
    .setTimestamp();
    message.channel.send({ embed })
  } else {
    embed.setAuthor(`Users Found With ${args}`)
    .setDescription(`${res.join('\n')}`)
    .setColor("#53A6F3")
    .setTimestamp();
    message.channel.send({ embed })
  }
}
