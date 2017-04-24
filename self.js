const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
var randomcolor = require('randomcolor')
var moment = require('moment')
var winston = require('winston')
require('./util/eventLoader')(client);

process.on('uncaughtException', function(err) {
    console.log('DUD I CAUGHT EXCEPTION?!??!: ' + err); //STOPS THE client FROM CRASHING
});

// function AaN(args, i) {
//     if (args[i] === null || args[i] === "" || args[i] === undefined) return true;
//     return false;
// }

const log = message => {
    console.log("I\'m ready asf!");
};

var reload = (message, cmd) => {
	delete require.cache[require.resolve('./commands/' + cmd)];
	try {
		let cmdFile = require('./commands/' + cmd);
	} catch (err) {
		message.channel.sendMessage(`Problem loading ${cmd}: ${err}`).then(
			response => response.delete(1000).catch(error => console.log(error.stack))
		).catch(error => console.log(error.stack));
	}
	message.channel.sendMessage(`${cmd} reload was a success!`).then(
		response => response.delete(1000).catch(error => console.log(error.stack))
	).catch(error => console.log(error.stack));
};
exports.reload = reload;

//     if (command == "prune") {
//         var amount = parseInt(args[1]);
//         message.channel.fetchMessages({
//                 limit: amount
//             })
//             .then(messages => {
//                 messages.map(message => message.delete().catch(console.error));
//             }).catch(console.error);
//     } else if (command == "clear") {
//         let delamount = parseInt(args[1]) ? parseInt(args[1]) : 1;
//         message.channel.fetchMessages({
//                 limit: 100
//             })
//             .then(messages => {
//                 messagear = messages.array();
//                 messagear = messagear.filter(message => message.author.id === client.user.id);
//                 messagear.length = delamount + 1;
//                 messagear.map(message => message.delete().catch(console.error));
//             });
//     }
	
//     if (message.content.toLowerCase() == prefix + 'r' || message.content.toLowerCase() == prefix + 'reload') {
//         message.channel.sendMessage(`:rocket: Selfclient is resetting, please wait. :rocket:`).then(function(t) {
//             process.exit(1);
//         });
//     }


client.login(config.tokens);
