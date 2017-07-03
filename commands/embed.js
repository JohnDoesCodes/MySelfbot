<<<<<<< HEAD
const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let noto = message.content.split(" ").slice(1).join(" ");

  message.delete();
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) {
    return message.channel.send("`ERROR:` I do not have permission to send Embed, contact administrator to get perm to send embed.");
  }
  var embed = new Discord.RichEmbed();

  embed.setColor("#53A6F3")

  .setDescription(noto)

  message.channel.sendEmbed(

    embed, {

      disableEveryon: true

    }

  );
};
=======
const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let noto = message.content.split(" ").slice(1).join(" ");

  message.delete();
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) {
    return message.channel.send("`ERROR:` I do not have permission to send Embed, contact administrator to get perm to send embed.");
  }
  var embed = new Discord.RichEmbed();

  embed.setColor("#53A6F3")

  .setDescription(noto)

  message.channel.sendEmbed(

    embed, {

      disableEveryon: true

    }

  );
};
>>>>>>> 68ae12d4ee819ce73c724b65761a3ab583bfc44a
