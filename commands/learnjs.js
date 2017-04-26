const Discord = require("discord.js");
exports.run = (client, message, args) => {
    message.delete()
    var embed = new Discord.RichEmbed();
    embed.setFooter('Javascript Code', ' ')
    .addField('Learning JavaScript', "**__Useful links for learning JavaScript and Node__**:\n\n**Codecademy online course**: https://www.codecademy.com/learn/javascript\n**Eloquent Javascript, free book**: http://eloquentjavascript.net/\n\n**Some Node**:\nhttp://nodeschool.io/\nhttps://www.codeschool.com/courses/real-time-web-with-node-js\n**Discord.js getting started guides**:\nhttps://www.youtube.com/channel/UCvQubaJPD0D-PSokbd5DAiw/videos\nhttps://www.youtube.com/channel/UCLun-hgcYUgNvCCj4sIa-jA/videos\n**Javascript reference/docs**: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference\n**discord.js documentation**: https://discord.js.org/#!/docs")
    .setColor("#EEFD3F")
    message.channel.sendEmbed(
        embed, {
            disableEveryon: true
        }
    )
};