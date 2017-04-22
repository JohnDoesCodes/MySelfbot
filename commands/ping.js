exports.run = (client, msg, args) => {
        startTime = Date.now();
        msg.channel.sendMessage("Pinging...").then((msg) => {
            endTime = Date.now();
            msg.edit(`Pong! \`${Math.round(endTime - startTime)}ms\``);
        });
}