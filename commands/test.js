const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("Kermits Crib", "https://images-ext-1.discordapp.net/external/VZAA91ojLaX2Qi0QZFaPqlACwWKnghBFXVfL_8s1lY8/%3Fwidth%3D54%26height%3D54/https/images-ext-2.discordapp.net/.eJwFwdsNgCAMAMBdGICi2ApuA6W-okIEv4y7e_eq5z7UpNbWSp0AOF06bZXznUIpmvMJG-ergu161zuyaHAYLVrqAGOMQpgMB8_ezIPMgSS64Ei8F9R7WdT3AxAyHlU.iCmmtW9LnS3MI15u_BHT0XDrBa8?width=41&height=41")
.setDescription("We're a small community, growing bigger and bigger.\nYou can advertise your own discord links in our server, to make your server grow bigger!\nHere are the best things about the server\n\n- Non toxic.\n- Growing community.\n- We're not super strict.\n- Get a free role upon invitation to friends.\n- Talk about a bunch of stuff.\n- 100+ Members\n- Great Staff")
.setColor(randomcolor())
.addField("Server Invite", "https://discord.gg/7Fgm6Tt")
message.channel.send({embed})
}