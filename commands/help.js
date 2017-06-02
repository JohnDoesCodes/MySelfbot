    const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let command = args[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.sendCode('asciidoc', `= ${command.help.name} = \n${command.help.description}\nusage:: ${command.help.usage}`);
    }
  }