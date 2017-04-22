const config = require('../config.json');
let bot = new Discord.Client();
let Discord = require("discord.js");
module.exports = msg => {
	if (!msg.content.startsWith(config.prefix)) return;
  if (msg.author.id !== bot.user.id) return; //Only allows you to work with it, since it's called a selfbot :P

  const bot = msg.bot;
  const args = msg.content.split(' ');
  const command = args.shift().slice(config.prefix.length);

	try {
		let cmdFile = require(`../commands/${command}`);
		cmdFile.run(bot, msg, args);
	} catch (err) {
		console.log(`Command ${command} failed\n${err.stack}`);
	}
};