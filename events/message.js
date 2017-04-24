const config = require('../config.json');
module.exports = message => {

function AaN(args, i) {
    if (args[i] === null || args[i] === "" || args[i] === undefined) return true;
    return false;
}

  let client = message.client;
	if (!message.content.startsWith(config.prefix)) return;
  if (message.author.id !== client.user.id) return;
	let text = message.content;
  const args = text.split(" ");
	let prefix = config.prefix;
  let command = text.substring(prefix.length, args[0].length).toLowerCase();

	try {
		let cmdFile = require(`../commands/${command}`);
		cmdFile.run(client, message, args);
	} catch (err) {
		console.log(`Command ${command} failed\n${err.stack}`);
	}
};