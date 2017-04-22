let main = require('../self.js');
exports.run = function(bot, message, args) {
	let cmd = args.join(' ');
	main.reload(message, cmd);
};