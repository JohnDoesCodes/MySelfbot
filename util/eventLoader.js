const reqEvent = (event) => require(`../events/${event}`);
const config = require('../config.json')
module.exports = client => {
client.on('ready', () => reqEvent('ready')(client));
client.on('guildMemberAdd', reqEvent('guildMemberAdd'));
client.on('message', reqEvent('message'));
};