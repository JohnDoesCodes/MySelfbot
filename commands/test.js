const Discord = require("discord.js");
exports.run = (client, message) => {
let online = 0x4ee075;
let idle = 0xddc318;
let dnd = 0xdd1717;

/*const status = {
online: 0x4ee075,    
idle: 0xddc318,
dnd: 0xdd1717
};*/

m.delete();  
    
let args = m.content.split(' ').slice(1).join(' ');
self.user.setGame(`${args}`, "https://twitch.tv/twitch");
//m.edit(`Stream status has been set as \`${args}\``).then(msg => msg.delete(1000));
let embed = new Discord.RichEmbed();
embed.setColor(online || idle | dnd)
.setAuthor('Leera Selfbot | Status', self.user.displayAvatarURL)
.addField('Status', `You are now ${args}`)
//.setThumbnail('https://maxcdn.icons8.com/Share/icon/Logos//twitch1600.png')
.setFooter('Selfbot Status')
.setTimestamp();
m.channel.send({ embed });
};    