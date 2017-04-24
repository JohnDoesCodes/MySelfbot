    var winston = require('winston')
exports.run = (client, message, args) => {
        let suffix = msg.content.slice(6);

        try {
            let evaled = eval(suffix);
            let type = typeof evaled;
            let insp = util.inspect(evaled, {
                depth: 0
            });
            let tosend = [];

            if (evaled === null) evaled = 'null';

            if (evaled.toString().includes(bot.token) ||
                insp.toString().includes(bot.token)) return msg.edit('Cannot complete eval due to token.');

            tosend.push('**EVAL:**');
            tosend.push('\`\`\`xl');
            tosend.push(clean(suffix));
            tosend.push('\`\`\`');
            tosend.push('**Evaluates to:**');
            tosend.push('\`\`\`xl');
            tosend.push(clean(evaled));
            tosend.push('\`\`\`');
            if (evaled instanceof Object) {
                tosend.push('**Inspect:**');
                tosend.push('\`\`\`xl');
                tosend.push(insp);
                tosend.push('\`\`\`');
            } else {
                tosend.push('**Type:**');
                tosend.push('\`\`\`xl');
                tosend.push(type);
                tosend.push('\`\`\`');
            }
            msg.edit(tosend.join('\n'));
            winston.log('info', `Evaluated ${tosend.join('\n')}`);
        } catch (err) {
            let tosend = [];
            tosend.push('**EVAL:** \`\`\`xl');
            tosend.push(clean(suffix));
            tosend.push('\`\`\`');
            tosend.push('**Error:** \`\`\`xl');
            tosend.push(clean(err.stack));
            tosend.push('\`\`\`');
            msg.edit(tosend.join('\n'));
            winston.log('info', `Error: ${tosend.join('\n')}`);
        }
};