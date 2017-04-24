const config = require('../config.json');
module.exports = message => {
	if (!message.content.startsWith(config.prefix)) return;
  if (message.author.id !== bot.user.id) return; //Only allows you to work with it, since it's called a selfbot :P

  const bot = message.bot;
  const args = message.content.split(' ');
  const command = args.shift().slice(config.prefix.length);

	try {
		let cmdFile = require(`../commands/${command}`);
		cmdFile.run(bot, message, args);
	} catch (err) {
		console.log(`Command ${command} failed\n${err.stack}`);
	}
};