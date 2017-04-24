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
	
// 	if (message.content.toLowerCase().startsWith(prefix + "links")) {
//     var embed = new Discord.RichEmbed();
//     embed.addField('My Facebook Link', 'This is My Facebook link. Add me on [Facebook](http://www.facebook.com/BenchMigami)')
//     .addField('Where to find Me', 'Here is a server where find, just [click here](https://discord.gg/dfdvArY)')
// 	.addField('Another Server to find me', 'Here is a lit server where you can find me, just [click here](https://discord.gg/8aKgYJx)')
//     .setColor("#EEFD3F")
//     message.channel.sendEmbed(

//             embed, {

//                 disableEveryone: true

//             }

//         );
// }

// if (message.content.toLowerCase().startsWith(prefix + "learnjs")) {
//     if(message.author.client) return;
//     var embed = new Discord.RichEmbed();
//     embed.setFooter('Javascript Code', ' ')
//     .addField('Learning JavaScript', "**__Useful links for learning JavaScript and Node__**:\n\n**Codecademy online course**: https://www.codecademy.com/learn/javascript\n**Eloquent Javascript, free book**: http://eloquentjavascript.net/\n\n**Some Node**:\nhttp://nodeschool.io/\nhttps://www.codeschool.com/courses/real-time-web-with-node-js\n**Discord.js getting started guides**:\nhttps://www.youtube.com/channel/UCvQubaJPD0D-PSokbd5DAiw/videos\nhttps://www.youtube.com/channel/UCLun-hgcYUgNvCCj4sIa-jA/videos\n**Javascript reference/docs**: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference\n**discord.js documentation**: https://discord.js.org/#!/docs")
//     .setColor("#EEFD3F")
//     message.channel.sendEmbed(
//         embed, {
//             disableEveryon: true
//         }
//     )
// }

// if (message.content.toLowerCase().startsWith(prefix + "servers")) {
//     message.author.sendMessage("Here are the Verified Server\'s!")
//     var embed = new Discord.RichEmbed();
//     embed.addField('Server\'s', '- Pando\'s Hangout is where the support server for Pando https://discord.gg/dfdvArY\n- Critical Ops Clans is a gaming Community https://discord.gg/8aKgYJx\n- Panda\'s Hangout is the server where Jayclient made https://discord.gg/R4AXuBM\n- SUPR3M3 Official is the server a clan on Critical Ops https://discord.gg/FdudkNN')
//     .setColor("#EEFD3F")
//     message.channel.sendEmbed(

//             embed, {

//                 disableEveryone: true

//             }

//         );
// }
	
// 	if (message.content.startsWith(prefix + "vac")) {
// 		message.channel.sendMessage("**Vac**ation"),
// message.edit("===========================  :red_car: "),
// message.edit("==========================  :red_car: "),
// message.edit("=========================  :red_car: "),
// message.edit("========================  :red_car: "),
// message.edit("======================  :red_car: "),
// message.edit("=====================  :red_car: "),
// message.edit(":warning: **Traffic** :warning: "),
// message.edit("=======================  :red_car: "),
// message.edit("======================  :red_car: "),
// message.edit("=====================  :red_car: "),
// message.edit("====================  :red_car: "),
// message.edit("===================  :red_car: "),
// message.edit("==================  :red_car: "),
// message.edit("=================  :red_car: "),
// message.edit("================  :red_car: "),
// message.edit("===============  :red_car: "),
// message.edit("==============  :red_car: "),
// message.edit("=============  :red_car: "),
// message.edit("============  :red_car: "),
// message.edit("===========  :red_car: "),
// message.edit("==========  :red_car: "),
// message.edit("=========  :red_car: "),
// message.edit("========  :red_car: "),
// message.edit("=======  :red_car: "),
// message.edit("======  :red_car: "),
// message.edit("=====  :red_car: "),
// message.edit("====  :red_car: "),
// message.edit("===  :red_car: "),
// message.edit("==  :red_car: "),
// message.edit("=  :red_car: "),
// message.edit(" :red_car: "),
// message.edit("**Vac**ation over")
// 	}
	
//     if (command == 'embed') {

//         let noto = message.content.split(" ").slice(1).join(" ");

//         message.delete();

//         var embed = new Discord.RichEmbed();

//         embed.setColor("#EEFD3F")

//             .setDescription(noto)

//         message.channel.sendEmbed(

//             embed, {

//                 disableEveryon: true

//             }

//         );

//     }

client.login(config.tokens);
