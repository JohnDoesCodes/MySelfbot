exports.run = (client, message, args) => {
    if (!message.guild || !message.member) return;
      message.channe.send('Your permissions are:\n' +
        JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4));
}