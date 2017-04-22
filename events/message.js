const config = require('../config.json');
module.exports = msg => {
	if (!msg.content.startsWith(config.prefix)) return;
  if (msg.author.id !== client.user.id) return; //Only allows you to work with it, since it's called a selfbot :P

  const client = msg.client;
  const args = msg.content.split(' ');
  const command = args.shift().slice(config.prefix.length);
  let prefix = config.prefix;
    let channel = msg.channel;
    let guild = msg.guild;
    let text = msg.content;
    let command = text.substring(prefix.length, args[0].length).toLowerCase();
    if (!msg.content.startsWith(prefix)) return;
	try {
		let cmdFile = require(`../commands/${command}`);
		cmdFile.run(client, msg, args);
	} catch (err) {
		console.log(`Command ${command} failed\n${err.stack}`);
	}
};