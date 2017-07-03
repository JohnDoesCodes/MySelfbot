<<<<<<< HEAD
const config = require('../config.json');
exports.run = (client, message, args) => {
  var arg = message.content.split(" ").slice(1).join(' ')

  try {

    message.channel.sendEmbed({

      color: 0x32CD32,

      description: `\`OUTPUT\`\n\`\`\`js\n${eval(arg)}\n\`\`\``

    })

  } catch(e) {

    message.channel.sendEmbed({

      color: 0x8B0000,

      description: `\`ERROR\`\n\`\`\`js\n${e}\n\`\`\``

    })

  }

};
=======
const config = require('../config.json');
exports.run = (client, message, args) => {
  var arg = message.content.split(" ").slice(1).join(' ')

  try {

    message.channel.sendEmbed({

      color: 0x32CD32,

      description: `\`OUTPUT\`\n\`\`\`js\n${eval(arg)}\n\`\`\``

    })

  } catch(e) {

    message.channel.sendEmbed({

      color: 0x8B0000,

      description: `\`ERROR\`\n\`\`\`js\n${e}\n\`\`\``

    })

  }

};
>>>>>>> 68ae12d4ee819ce73c724b65761a3ab583bfc44a
