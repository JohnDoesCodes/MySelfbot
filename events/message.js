const config = require('../config.json');
let bot = new Discord.Client();
let Discord = require("discord.js");
module.exports = msg => {
	if (!msg.content.startsWith(config.prefix)) return;
  if (msg.author.id !== bot.user.id) return; //Only allows you to work with it, since it's called a selfbot :P

  const bot = msg.bot;
  const args = msg.content.split(' ');
  const command = args.shift().slice(config.prefix.length);
  let prefix = config.prefix
  let channel = msg.channel;
  let guild = msg.guild;
  let text = msg.content;
  let args = text.split(" ");
  let command = text.substring(prefix.length, args[0].length).toLowerCase();

	try {
		let cmdFile = require(`../commands/${command}`);
		cmdFile.run(bot, msg, args);
	} catch (err) {
		console.log(`Command ${command} failed\n${err.stack}`);
	}
};