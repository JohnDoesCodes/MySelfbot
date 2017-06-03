const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
// var randomcolor = require('randomcolor')
var moment = require('moment')
const fs = require('fs');
var winston = require('winston')
require('./util/eventLoader')(client);


////////////////////////////////////////////
//                                        //
//                                        //
//       Selfbot made by: aeris#9897      //
//                                        //               
//                                        //
//                                        //
////////////////////////////////////////////
 
process.on('uncaughtException', function(err) {
    console.log('DUD I CAUGHT EXCEPTION?!??!: ' + err); //STOPS THE BOT FROM CRASHING
});

function AaN(args, i) {
    if (args[i] === null || args[i] === "" || args[i] === undefined) return true;
    return false;
}

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

client.login(config.tokens);
