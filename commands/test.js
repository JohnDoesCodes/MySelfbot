const Discord = require("discord.js");
const childProcess = require('child_process')
exports.run = (client, message, args) => {
childProcess.exec(message.originalContent, { shell: '/bin/bash' }, (err, stdout) => {
      if (err) return message.channel.send(err.message, { code: true });
      message.channel.send(stdout, { code: true });
});
}