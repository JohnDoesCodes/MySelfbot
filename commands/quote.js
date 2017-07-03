<<<<<<< HEAD
exports.run = (client, message, args) => {
  var quote = message.content.split(" ").slice(1).join(" ");

  message.delete();

  if (quote.length < 1) {

    return message.channel.send("Please specify a message ID.");

  }

  message.channel.fetchMessages({

    limit: 1,

    around: quote

  }).then(messages => {

    const fm = messages.first();

    message.channel.send("", {

      embed: {

        color: 0x3cb8c9,

        author: {

          name: `${fm.author.tag}`,

          icon_url: fm.author.avatarURL

        },

        description: fm.content

      }

    });

  });
};
=======
exports.run = (client, message, args) => {
  var quote = message.content.split(" ").slice(1).join(" ");

  message.delete();

  if (quote.length < 1) {

    return message.channel.send("Please specify a message ID.");

  }

  message.channel.fetchMessages({

    limit: 1,

    around: quote

  }).then(messages => {

    const fm = messages.first();

    message.channel.send("", {

      embed: {

        color: 0x3cb8c9,

        author: {

          name: `${fm.author.tag}`,

          icon_url: fm.author.avatarURL

        },

        description: fm.content

      }

    });

  });
};
>>>>>>> 68ae12d4ee819ce73c724b65761a3ab583bfc44a
