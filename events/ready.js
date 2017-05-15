const config = require('../config.json');
module.exports = client => {
	let games = [`with Coding`, `I love JavaScript`, `xd`, `more xd`];
      setInterval(() => {
        client.user.setGame(games[Math.floor(Math.random() * games.length)], 'https://twitch.tv')
}, 12000)
};