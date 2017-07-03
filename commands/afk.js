<<<<<<< HEAD
const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let nickname = message.guild.member(client.user).nickname;
  let username = message.guild.member(client.user).user.username;
  if (!nickname) {
    message.guild.member(client.user).setNickname(username + ' [is AFK]').then(() => {
      message.edit('Set to away from keyboard').then(response => response.delete(1000).catch(error => console.log(error.stack)));
    }).catch(error => console.log(error.stack));
  } else

  if (nickname.search(' [is AFK]')) {
    message.guild.member(client.user).setNickname('').then(() => {
      message.edit('No longer AFK').then(response => response.delete(1000).catch(error => console.log(error.stack)));
    }).catch(error => console.log(error.stack));
  } else

  if (nickname && !nickname.includes(' [is AFK]')) {
    message.guild.member(client.user).setNickname(nickname + ' [is AFK]').then(() => {
      message.edit('Set to Away From Keyboard').then(response => response.delete(1000).catch(error => console.log(error.stack)));
    }).catch(error => console.log(error.stack));
  } else if (nickname.search(' [is AFK]')) {
    message.guild.member(client.user).setNickname(nickname.replace(/ \[AFK\]/g, '')).then(() => {
      message.edit('No longer AFK').then(response => response.delete(1000).catch(error => console.log(error.stack)));
    }).catch(error => console.log(error.stack));
  }
}; 
=======
const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let nickname = message.guild.member(client.user).nickname;
  let username = message.guild.member(client.user).user.username;
  if (!nickname) {
    message.guild.member(client.user).setNickname(username + ' [is AFK]').then(() => {
      message.edit('Set to away from keyboard').then(response => response.delete(1000).catch(error => console.log(error.stack)));
    }).catch(error => console.log(error.stack));
  } else

  if (nickname.search(' [is AFK]')) {
    message.guild.member(client.user).setNickname('').then(() => {
      message.edit('No longer AFK').then(response => response.delete(1000).catch(error => console.log(error.stack)));
    }).catch(error => console.log(error.stack));
  } else

  if (nickname && !nickname.includes(' [is AFK]')) {
    message.guild.member(client.user).setNickname(nickname + ' [is AFK]').then(() => {
      message.edit('Set to Away From Keyboard').then(response => response.delete(1000).catch(error => console.log(error.stack)));
    }).catch(error => console.log(error.stack));
  } else if (nickname.search(' [is AFK]')) {
    message.guild.member(client.user).setNickname(nickname.replace(/ \[AFK\]/g, '')).then(() => {
      message.edit('No longer AFK').then(response => response.delete(1000).catch(error => console.log(error.stack)));
    }).catch(error => console.log(error.stack));
  }
}; 
>>>>>>> 68ae12d4ee819ce73c724b65761a3ab583bfc44a
