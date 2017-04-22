let config = require('../config.json');
module.exports = message => {
	if (!message.content.startsWith(config.prefix)) return;
  if (message.author.id !== client.user.id) return; //Only allows you to work with it, since it's called a selfbot :P

  let client = message.client;
  let args = message.content.split(' ');
  let command = args.shift().slice(config.prefix.length);

	try {
		let cmdFile = require(`../commands/${command}`);
		cmdFile.run(client, message, args);
	} catch (err) {
		console.log(`Command ${command} failed\n${err.stack}`);
	}
};