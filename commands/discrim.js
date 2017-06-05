const Discord = require("discord.js");
exports.run = (client, message, args) => {
const res = client.users.filter(u => u.discriminator === `${args}`).map(u => u.username)
  if(res.length === 0) return message.channel.sendMessage(`:x: **No users found matching discriminator ${args}.**`)
message.channel.sendMessage(`:mag_right: __**${res.length} users found with the discriminator ${args}**__:\n\n${res.join('\n')}`)}
