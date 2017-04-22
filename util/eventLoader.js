let reqEvent = (event) => require(`../events/${event}`);
let config = require('../config.json')
module.exports = client => {
    client.on('ready', () => reqEvent('ready')(client));
    client.on('message', reqEvent('message'));
}