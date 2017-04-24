exports.run = (client, message, args) => {
    var winston = require('winston')
            let suffix = message.content.slice(6);

        try {
            let evaled = eval(suffix);
            let type = typeof evaled;
            let insp = util.inspect(evaled, {
                depth: 0
            });
            let tosend = [];

            if (evaled === null) evaled = 'null';

            if (evaled.toString().includes(client.token) ||
                insp.toString().includes(client.token)) return message.edit('Cannot complete eval due to token.');

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
            message.edit(tosend.join('\n'));
            winston.log('info', `Evaluated ${tosend.join('\n')}`);
        } catch (err) {
            let tosend = [];
            tosend.push('**EVAL:** \`\`\`xl');
            tosend.push(clean(suffix));
            tosend.push('\`\`\`');
            tosend.push('**Error:** \`\`\`xl');
            tosend.push(clean(err.stack));
            tosend.push('\`\`\`');
            message.edit(tosend.join('\n'));
            winston.log('info', `Error: ${tosend.join('\n')}`);
        }
    }

    function clean(text) {
        if (typeof(text) === "string") {
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        } else {
            return text;
        }
};