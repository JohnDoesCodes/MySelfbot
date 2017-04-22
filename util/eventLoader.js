const reqEvent = (event) => require(`../events/${event}`);
var settings = require('../config.json')
module.exports = bot => {
    client.on('ready', () => reqEvent('ready')(bot));
}