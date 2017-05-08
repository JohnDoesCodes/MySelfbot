const { exec } = require('child_process');
const username = require('os').userInfo().username;

const Discord = require("discord.js");
exports.run = (client, message, args) => {
if (args.length < 1)
        throw 'You must provide a command to run!';

    let parsed = client.utils.parseArgs(args, 'l:');

    let ps = exec(parsed.leftover.join(' '));
    if (!ps)
        throw 'Failed to start process!';

    let opts = {
        prefix: `\`\`\`${parsed.options.l || 'bash'}\n`,
        suffix: '\n```',
        delay: 10,
        cutOn: '\n'
    };

    ps.stdout.on('data', data => client.utils.sendLarge(msg.channel, clean(data), opts));
    ps.stderr.on('data', data => client.utils.sendLarge(msg.channel, clean(data), opts));
};

const clean = (data) => {
    return data.toString()
        .replace(new RegExp(username, 'g'), '<Hidden>')
        .replace(/\[[0-9]*m/g, '');

    }