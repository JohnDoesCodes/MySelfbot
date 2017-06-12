const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("Discord News", "https://cdn.discordapp.com/icons/310477556015038465/b2478ee0ea497c4cade06c65cb79b92a.jpg")
.setDescription("Discord News is a server dedicated to bring you the latest Discord news as soon as it happens. We have many staff members who write weekly articles about different things happening around Discord so you always have something to read! We also have a website, bot, and server, so you can subscribe to us however you want. Check our server or website, and subscribe to Discord News today!")
.addField(" Join our server now!", "[click here](https://discord.gg/NqYzzdv)", true)
.addField("Check out our official server!", "[Click here](https://discordnews.ml/)", true)
.setImage("https://images-ext-2.discordapp.net/external/Ncsq9y8njcnNnovHdPGPlxxf4Z58ABqjK2hZeeMydoI/https/cdn.discordapp.com/attachments/323285788764930048/323808047140962324/Discord_News_Banner.png")
.setColor(randomcolor())
message.channel.send({embed})
}