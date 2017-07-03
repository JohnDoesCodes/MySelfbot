<<<<<<< HEAD
const Discord = require("discord.js");
exports.run = (client, message, args) => {
  message.delete()
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) {
    return message.channel.send("`ERROR:` I do not have permission to send Embed, contact administrator to get perm to send embed.");
  }
  var embed = new Discord.RichEmbed();
  embed.setFooter(`Have fun!`, `${message.author.displayAvatarURL}`)
  // .setAuthor(`${message.author.tag}`, 'https://cdn.discordapp.com/attachments/308137730141847552/309334653511401482/anime.jpg')
  .addField('Learning JavaScript', "**__Useful links for learning JavaScript and Node__**:\n\n**Codecademy online course**: https://www.codecademy.com/learn/javascript\n**Eloquent Javascript, free book**: http://eloquentjavascript.net/\n\n**Some Node**:\nhttp://nodeschool.io/\nhttps://www.codeschool.com/courses/real-time-web-with-node-js\n**Discord.js getting started guides**:\nhttps://www.youtube.com/channel/UCvQubaJPD0D-PSokbd5DAiw/videos\nhttps://www.youtube.com/channel/UCLun-hgcYUgNvCCj4sIa-jA/videos\n**Javascript reference/docs**: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference\n**discord.js documentation**: https://discord.js.org/#!/docs")
  .setColor("#53A6F3")
  message.channel.sendEmbed(
    embed, {
      disableEveryon: true
    }
  )
};
=======
const Discord = require("discord.js");
exports.run = (client, message, args) => {
  message.delete()
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) {
    return message.channel.send("`ERROR:` I do not have permission to send Embed, contact administrator to get perm to send embed.");
  }
  var embed = new Discord.RichEmbed();
  embed.setFooter(`Have fun!`, `${message.author.displayAvatarURL}`)
  // .setAuthor(`${message.author.tag}`, 'https://cdn.discordapp.com/attachments/308137730141847552/309334653511401482/anime.jpg')
  .addField('Learning JavaScript', "**__Useful links for learning JavaScript and Node__**:\n\n**Codecademy online course**: https://www.codecademy.com/learn/javascript\n**Eloquent Javascript, free book**: http://eloquentjavascript.net/\n\n**Some Node**:\nhttp://nodeschool.io/\nhttps://www.codeschool.com/courses/real-time-web-with-node-js\n**Discord.js getting started guides**:\nhttps://www.youtube.com/channel/UCvQubaJPD0D-PSokbd5DAiw/videos\nhttps://www.youtube.com/channel/UCLun-hgcYUgNvCCj4sIa-jA/videos\n**Javascript reference/docs**: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference\n**discord.js documentation**: https://discord.js.org/#!/docs")
  .setColor("#53A6F3")
  message.channel.sendEmbed(
    embed, {
      disableEveryon: true
    }
  )
};
>>>>>>> 68ae12d4ee819ce73c724b65761a3ab583bfc44a
