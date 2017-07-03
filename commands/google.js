<<<<<<< HEAD
const Discord = require("discord.js");
exports.run = (client, message) => {
  var request = require('request');
  const args = message.content.split(' ').slice(1).join(' ');
  let res = message.channel.send(`:mag: \`${args}\`...`);
  request(`https://www.googleapis.com/customsearch/v1?key=AIzaSyDu7_tL50kfEcegjXnYqfBxXrKqBrknkkY&cx=013036536707430787589:_pqjad5hr1a&q=${args}&alt=json`, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var kek = JSON.parse(body)
      //message.edit(`:mag: \`${args}\` **${kek.items[0].title}**\n__<${kek.items[0].link}>__\n${kek.items[0].snippet}`);
      message.channel.send({embed: {
        author: {name: `${args} - Google Search`, icon_url: `https://shady.world/assets/google.jpg`},
        description: `[**${kek.items[0].title}**](${kek.items[0].link})\n\n${kek.items[0].snippet}`,
        color: 0xffffff,
        footer: {text: `${Number(kek.queries.request[0].totalResults).toLocaleString()} total results`}
      }})
    }
  });
}
=======
const Discord = require("discord.js");
exports.run = (client, message) => {
  var request = require('request');
  const args = message.content.split(' ').slice(1).join(' ');
  let res = message.channel.send(`:mag: \`${args}\`...`);
  request(`https://www.googleapis.com/customsearch/v1?key=AIzaSyDu7_tL50kfEcegjXnYqfBxXrKqBrknkkY&cx=013036536707430787589:_pqjad5hr1a&q=${args}&alt=json`, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var kek = JSON.parse(body)
      //message.edit(`:mag: \`${args}\` **${kek.items[0].title}**\n__<${kek.items[0].link}>__\n${kek.items[0].snippet}`);
      message.channel.send({embed: {
        author: {name: `${args} - Google Search`, icon_url: `https://shady.world/assets/google.jpg`},
        description: `[**${kek.items[0].title}**](${kek.items[0].link})\n\n${kek.items[0].snippet}`,
        color: 0xffffff,
        footer: {text: `${Number(kek.queries.request[0].totalResults).toLocaleString()} total results`}
      }})
    }
  });
}
>>>>>>> 68ae12d4ee819ce73c724b65761a3ab583bfc44a
