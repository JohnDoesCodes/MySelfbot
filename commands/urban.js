module.exports = class Urban {
  constructor(client) {
    this.client = client;
    this.name = "urban";
    this.info = "Urban search.";
    this.args = "<args>";
  }

  async run(message, args) {
const Discord = require("discord.js");
const unirest = require ('unirest')
unirest.get(`https://mashape-community-urban-dictionary.p.mashape.com/define?term=${args.split('+')}`)
  .header("X-Mashape-Key", "kpkOWomvxOmshmL5UBLZYTjw7lWUp1LCls5jsnJhDLm4VjIPl6")
  .header("Accept", "text/plain")
  .end(function (result, err) {
  if(!result.body.list[0]) return message.reply('No definition found!')
  //message.channel.sendMessage(`\`Definition for ${args.join(' ')}\`\n\n**Definition**: ${result.body.list[0].definition}\n\n**Example**: ${result.body.list[0].example}\n\n**Author**: ${result.body.list[0].author}\n\n**Up / Down Ratio**: ${result.body.list[0].thumbs_up} :thumbsup: to ${result.body.list[0].thumbs_down} :thumbsdown:`)
  const embed = new(require('discord.js')).RichEmbed();
  embed.setTitle(`Definition for ${args}`)
  embed.setURL(`https://urbandictionary.com/`)
  embed.setDescription(`${result.body.list[0].definition}`)
  embed.addField(`Example`, `${result.body.list[0].example}`, false)
  embed.setColor(0xffffff)
  message.channel.sendEmbed(embed)
})
}
}
