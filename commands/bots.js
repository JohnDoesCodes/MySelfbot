const Discord = require("discord.js");
exports.run = (client, message, args) => {
  message.delete()
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) {
    return message.channel.send("`ERROR:` I do not have permission to send Embed, contact administrator to get perm to send embed.");
  }
  var embed = new Discord.RichEmbed();
  embed.setColor("#53A6F3")
  .setAuthor('Aeris Discord!')
  .addField("Info", "Aeris Bot Supports is a help support for everyone that need help about our main bots. We can discuss anything except againts the rules and mostly importantly have fun. Mainly, this server is used as a help server, where we talk about our main bots. We focus on tons of topics from gaming and coding, to NSFW and shitposting!")
  .addField('Official Server of ModBot!', "```fix\nWe have great bot developers! That means:\n```\n :black_small_square: We have our own discord bots\n :black_small_square: Great bot qualities\n :black_small_square: And much more!")
  .addField('Invite Link', "[Click Here](https://discord.io/aerisdiscord)", true)
  .addField('For Mobile', "https://discord.gg/dfdvArY", true)
  .setImage("https://cdn.discordapp.com/attachments/280289168544759808/322333628732538880/Aeris_Discord_banner.png");
  message.channel.sendEmbed(
    embed, {
      disableEveryone: true
    }
  );
}
