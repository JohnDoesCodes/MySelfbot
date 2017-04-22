const client = new Discord.Client();
module.exports = client => {
	let games = [`with Coding`, `I love JavaScript`, `with Chris`, `xd`, `more xd`];
      setInterval(() => {
        client.user.setGame(games[Math.floor(Math.random() * games.length)])
		console.log('I am ready asf!');
}, 12000)
};