const reqEvent = (event) => require(`../events/${event}`);
var settings = require('../config.json')
module.exports = client => {
    client.on('ready', () => reqEvent('ready')(bot));
}