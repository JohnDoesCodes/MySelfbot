const config = require('../config.json');
module.exports = (client, message) => {
	 let games = [`https://discord.io/aerisdiscord`, `https://discord.gg/dfdvArY`];
       setInterval(() => {
		   client.user.setGame(games[Math.floor(Math.random() * games.length)], 'https://twitch.tv/aerisdoescodes')
        //client.user.setGame('JavaScript', 'https://twitch.tv/aeriscodes')
 }, 12000)
};