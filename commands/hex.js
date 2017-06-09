const Discord = require("discord.js");
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
let hex = args;
    if (args.startsWith('#')) hex = "0x" + args.substring(1);
    message.delete();
        embed.setColor(args);

message.channel.sendEmbed(embed)
}