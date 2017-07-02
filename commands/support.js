const Discord = require("discord.js");
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
  message.delete()
  embed.setAuthor("Support")
  .setDescription("<@&280286202383302656> **:** Duo\n<@&300574970654752778> **:** Administrator of the server\n<@&280287389581312001> **:** Moderator of the server\n<@&299932471665885184> **:** Helper of the server")
  .setImage("https://cdn.discordapp.com/attachments/322192444521185282/329247702707732480/Support.jpg")
  .setColor("#8f43cf")
  message.channel.sendEmbed(
    embed, {
      disableEveryone: true
    }
  );
}
