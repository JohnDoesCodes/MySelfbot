<<<<<<< HEAD
const reqEvent = (event) => require(`../events/${event}`);
const config = require('../config.json')
module.exports = client => {
  client.on('ready', () => reqEvent('ready')(client));
  client.on('message', reqEvent('message'));
=======
const reqEvent = (event) => require(`../events/${event}`);
const config = require('../config.json')
module.exports = client => {
  // client.on('ready', () => reqEvent('ready')(client));
  client.on('message', reqEvent('message'));
>>>>>>> 68ae12d4ee819ce73c724b65761a3ab583bfc44a
};
