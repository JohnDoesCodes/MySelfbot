const reqEvent = (event) => require(`../events/${event}`);
var settings = require('../config.json')
module.exports = bot => {
    bot.on('ready', () => reqEvent('ready')(bot));
}