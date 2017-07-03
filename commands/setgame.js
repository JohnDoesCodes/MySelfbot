<<<<<<< HEAD
const Discord = require("discord.js");
var embed = new Discord.RichEmbed();
exports.run = (client, message) => {
  const args = message.content.split(' ').slice(1).join(' ');
  client.user.setGame(`${args}`);
  embed.setDescription(`Your game has been set to \`${args}\``)
  .setAuthor('aeris#0018 Selfbot | Game Status', client.user.displayAvatarURL)
  .setColor("#2F79E2")
  message.channel.sendEmbed(
    embed, {
      disableEveryone: true
    }
  );
}
=======
const Discord = require("discord.js");
var embed = new Discord.RichEmbed();
exports.run = (client, message) => {
  const args = message.content.split(' ').slice(1).join(' ');
  client.user.setGame(`${args}`);
  embed.setDescription(`Your game has been set to \`${args}\``)
  .setAuthor('aeris#0018 Selfbot | Game Status', client.user.displayAvatarURL)
  .setColor("#2F79E2")
  message.channel.sendEmbed(
    embed, {
      disableEveryone: true
    }
  );
}
>>>>>>> 68ae12d4ee819ce73c724b65761a3ab583bfc44a
