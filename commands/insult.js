exports.run = (client, message, args) => {
      if (!message.guild || !message.member) return;
let user = message.guild.member(message.mentions.users.first());
if (!user)
return message.channel.sendMessage("`io.insult <user> and try what can I do.`")
  var response = ['Youre a failed abortion whose birth certificate is an apology from the condom factory.', 'Your family tree is a cactus, because everybody on it is a prick.', 'It looks like your face caught on fire and someone tried to put it out with a fork.', 'Yow I have fuck your sister you son of a bitch!', 'You are so ugly that when your mama dropped you off at school she got a fine for littering.', 'I am fuckin your mother you fucking whore!', 'Your so ugly when you popped out the doctor said aww what a treasure and your mom said yeah lets bury it!', 'You were picking up trash yesterday but you forgot to pick up one thing: your skills', 'Your cant even beat me on 1v1, surely VentusGaming can make you suck your own dick!', 'Your Fuckin Noob', 'Yow Cyka Blyat you are a fuckin cunt that you are a son of your fuckin slut mother!'];
message.channel.sendMessage(response[~~(Math.random() * response.length)])
};