const Discord = require("discord.js");
exports.run = (client, message, args) => {
const Discord = require('discord.js'); 
let embed = new Discord.RichEmbed();
embed.setColor(0x42c5f4)
// .setAuthor(`${message.guild.iconURL}`, `${message.guild.name}`)
.addField('Welcome to Night Seekers!', 'A chat based around anime, but also for everyone and anyone to get to know each other. We will be offering a lot more features once we grow bigger, like for example events, giveaways and such! So please spread the word to your friends.')
.addField(':books: Server rules. :books:', "#1 Spamming isn't allowed in any channels.\n#2 Advertising is prohibited.\n#3 Respect the staff.\n#4 NSFW content is prohibited.\n#5 Do not spam any bot commands.")
.addField(':link: Server Invitation :link:', 'gdsx')
.addField(':partner: Apply for a partnership!', '(Click here)[https://www.google.com]')
.addField(':certifieddev: Apply for staff!', '(Click here)[https://www.google.com]')
.setThumbnail(`${message.guild.iconURL}`)
message.channel.sendEmbed(
            embed, {
                disableEveryone: true
            }
        );
}