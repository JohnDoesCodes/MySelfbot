const config = require('../config.json');
module.exports = client => {
	let games = [`with Coding`, `I love JavaScript`, `xd`, `more xd`];
      setInterval(() => {
        client.user.setGame(games[Math.floor(Math.random() * games.length)])
		console.log('I am ready asf!');
}, 12000)
};