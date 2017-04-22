const config = require('../config.json');
module.exports = msg => {
	if (!msg.content.startsWith(config.prefix)) return;
  if (msg.author.id !== client.user.id) return; //Only allows you to work with it, since it's called a selfbot :P

  const client = msg.client;
  const args = msg.content.split(' ');
  const command = args.shift().slice(config.prefix.length);

	try {
		let cmdFile = require(`../commands/${command}`);
		cmdFile.run(client, msg, args);
	} catch (err) {
		console.log(`Command ${command} failed\n${err.stack}`);
	}
};