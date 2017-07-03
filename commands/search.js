<<<<<<< HEAD
const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if (args.length < 1)

  throw 'You must specify what to search for!';



  let query = args.join(' ');



  message.edit(`\u{1f504} Searching the last \`100\` messages for \`${query}\``).then(m => {

    message.channel.fetchMessages({ limit: 100, before: message.id }).then(messages => {

      let results = messages.filter(it => it.content.toLowerCase().indexOf(query.toLowerCase()) != -1);

      let output = results

      .map(it => `${formatDate(it.createdAt)} ${it.author.username}: ${it.content}`)

      .join('\n');

      m.editCode('log', output);

    }).catch(message.error);

  });

};



const formatDate = (date) => {

  return `[${_(date.getDay())}/${_(date.getMonth())}/${_(date.getYear() - 100)}] [${_(date.getHours())}:${_(date.getMinutes())}:${_(date.getSeconds())}]`;

};



const _ = (number) => {

  return number < 10 ? '0' + number : '' + number;
}
=======
const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if (args.length < 1)

  throw 'You must specify what to search for!';



  let query = args.join(' ');



  message.edit(`\u{1f504} Searching the last \`100\` messages for \`${query}\``).then(m => {

    message.channel.fetchMessages({ limit: 100, before: message.id }).then(messages => {

      let results = messages.filter(it => it.content.toLowerCase().indexOf(query.toLowerCase()) != -1);

      let output = results

      .map(it => `${formatDate(it.createdAt)} ${it.author.username}: ${it.content}`)

      .join('\n');

      m.editCode('log', output);

    }).catch(message.error);

  });

};



const formatDate = (date) => {

  return `[${_(date.getDay())}/${_(date.getMonth())}/${_(date.getYear() - 100)}] [${_(date.getHours())}:${_(date.getMinutes())}:${_(date.getSeconds())}]`;

};



const _ = (number) => {

  return number < 10 ? '0' + number : '' + number;
}
>>>>>>> 68ae12d4ee819ce73c724b65761a3ab583bfc44a
