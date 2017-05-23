const config = require('../config.json');
module.exports = client => {
  var argresult = message.content.split(' ').slice(2).join(' ');
	// let games = [`with Coding`, `I love JavaScript`, `xd`, `more xd`];
  //     setInterval(() => {
        client.user.setGame(argresult, 'https://twitch.tv/aeriscodes')
// }, 12000)
};