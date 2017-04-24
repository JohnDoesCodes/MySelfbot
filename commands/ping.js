const bot = new Discord.Client();
exports.run = (bot, message, args) => {
        startTime = Date.now();
        message.channel.sendMessage("Pinging...").then((message) => {
            endTime = Date.now();
            message.edit(`Pong! \`${Math.round(endTime - startTime)}ms\``);
        });
}