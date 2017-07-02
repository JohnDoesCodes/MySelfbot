const Discord = require("discord.js");
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
  message.delete()
  embed.setAuthor("Self Role")
  .setDescription("Type `p!agree` <#285246716582559744> to prove you read the rules and become a supporter of the server. No spoon feeding people the rules. Your level increases by participating in chat and may be rewarded different ranks.")
  .setImage("https://cdn.discordapp.com/attachments/248014822082347008/329238759210090497/Role_Logo.png")
  .setColor("ffb6c1")
  message.channel.sendEmbed(
    embed, {
      disableEveryone: true
    }
  );
}
