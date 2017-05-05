const config = require('../config.json');
module.exports = message => {

  let client = message.client;
	if (!message.content.startsWith(config.prefix)) return;
  if (message.author.id !== client.user.id) return;
  let args = message.content.split(" ").slice(1).join(" ");
  const command = args.shift().slice(config.prefix.length);

	try {
		let cmdFile = require(`../commands/${command}`);
		cmdFile.run(client, message, args);
	} catch (err) {
		console.log(`Command ${command} failed\n${err.stack}`);
	}
};