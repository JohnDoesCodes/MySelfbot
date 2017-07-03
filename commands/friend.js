<<<<<<< HEAD
exports.run = (client, message, args) => {
  message.delete()
  if (!message.mentions.users.first()) return message.edit('Failed to send friend request to a cool guy.');
  message.mentions.users.first().addFriend().then(() => {
    message.edit("I just add friend a cool guy xd");
  })

};
=======
exports.run = (client, message, args) => {
  message.delete()
  if (!message.mentions.users.first()) return message.edit('Failed to send friend request to a cool guy.');
  message.mentions.users.first().addFriend().then(() => {
    message.edit("I just add friend a cool guy xd");
  })

};
>>>>>>> 68ae12d4ee819ce73c724b65761a3ab583bfc44a
