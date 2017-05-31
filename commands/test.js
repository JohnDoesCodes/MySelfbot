const settings = require('../settings.json');
exports.run = (client, message, args, perms, reqPerms, permRole, reqRole, cmd, pfx) => {
  if (!args[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.sendCode('asciidoc', `= Command List =\n\n[Use ${pfx}help <commandname> for details]\n\n${client.commands.map(c => `${pfx}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`);
  } else {
    let command = args[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.sendCode('asciidoc', `= ${command.help.name} = \n${command.help.description}\nusage:: ${command.help.usage}\n= Aliases =\n${command.conf.aliases}`);
    } else if (!client.commands.has(command)) {
      message.reply(`\[${command}\] That Command is invalid. Use ${pfx}help for a list of commands`)
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Displays all the available commands for your permission level.',
  usage: 'help [command]'
};
