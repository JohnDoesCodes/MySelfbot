const config = require('../config.json');
module.exports = message => {
	if (!message.content.startsWith(config.prefix)) return;
  if (message.author.id !== client.user.id) return; //Only allows you to work with it, since it's called a selfbot :P

  const client = message.client;
  const args = message.content.split(' ');
  const command = args.shift().slice(config.prefix.length);
    // let prefix = config.prefix;
    // let channel = message.channel;
    // let guild = message.guild;
    // let text = message.content;
	try {
		let cmdFile = require(`../commands/${command}`);
		cmdFile.run(client, message, args);
	} catch (err) {
		console.log(`Command ${command} failed\n${err.stack}`);
	}
};