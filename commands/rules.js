const Discord = require("discord.js");
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
  message.delete()
  embed.setAuthor("Rules")
  .setDescription("▪ **DO NOT** spam any of the channels except <#299628878693924865>\n▪ **DO NOT** advertise discord links in ANY of the channels.\n▪ Respect all staff members.\n▪ Racism and harrasment are forbidden.\n▪ All members should be treated equally.")
  .setImage("https://cdn.discordapp.com/attachments/248014822082347008/329242917795528704/obey_the_rules.jpg")
  .setColor("#00FFFF")
  message.channel.sendEmbed(
    embed, {
      disableEveryone: true
    }
  );
}
