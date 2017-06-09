// const Discord = require("discord.js");
// const randomcolor = require('randomcolor');
// var embed = new Discord.RichEmbed();
// exports.run = (client, message, args) => {

// var kill = ['CodingLife has been summoned and shot ', 'CodingLife has been summoned and brutally stabbed ', 'CodingLife has been and summoned hung ', 'CodingLife has been summoned and burned ', 'CodingLife has been summoned and sacrificed ', 'CodingLife has been summoned and beat '];

//     var user = message.mentions.users.first();

//     if(!user) {

//         message.delete();


//         embed.setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL}`)
//         .setDescription('Specify a user.')
//         .setColor(randomcolor())

//         message.channel.sendEmbed(

//           embed, {

//             disableEveryon: true

//           }

//         );

//     } else {
//         embed.setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL}`)
//         .setDescription(kill[Math.floor(Math.random() * kill.length)] + user)
//         .setColor(randomcolor())

//         message.channel.sendEmbed(

//           embed, {

//             disableEveryon: true

//           }

//         );
//     }
    
// }