const Discord = require("discord.js");
exports.run = (client, message, args) => {
      message.channel.sendEmbed({

      color: 0x32CD32,

      description: `Pong Succ ma dicc! \`${Math.round(endTime - startTime)}ms\``

    })
}

  // message.delete();
  //       startTime = Date.now();
  // message.channel.sendMessage("Pinging...").then((message) => {
  //           endTime = Date.now();
  //           message.edit(`Pong Succ ma dicc! \`${Math.round(endTime - startTime)}ms\``);
  // });