exports.run = (client, message, args) => {
  message.delete()
  if (!message.mentions.users.first()) return message.edit('Failed to send friend request to a cool guy.');
  message.mentions.users.first().addFriend().then(() => {
    message.edit("I just add friend a cool guy xd");
  })

};
