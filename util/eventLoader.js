let reqEvent = (event) => require(`../events/${event}`);
let config = require('../config.json')
module.exports = bot => {
    bot.on('ready', () => reqEvent('ready')(bot));
    bot.on('message', reqEvent('message'));
};