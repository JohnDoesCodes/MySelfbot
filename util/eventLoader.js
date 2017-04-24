const reqEvent = (event) => require(`../events/${event}`);
const config = require('../config.json')
module.exports = bot => {
    bot.on('ready', () => reqEvent('ready')(bot));
    bot.on('message', reqEvent('message'));
};