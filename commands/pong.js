exports.run = (client, message, args) => {
  message.delete();
     message.channel.sendMessage("Ping took \`10123123123ms\` to ping <@255815122616844288>")
}