const reqEvent = (event) => require(`../events/${event}`);
var config = require('../config.json')
module.exports = client => {
    client.on('ready', () => reqEvent('ready')(client));
    client.on('msg', reqEvent('message'));
}