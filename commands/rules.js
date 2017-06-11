const Discord = require("discord.js");
exports.run = (client, message, args) => {
var embed = new Discord.RichEmbed();
embed.addField("Ladyback Cafe", "Want a server where you can hang and chat? layback cafe is a place where you hang and chat. the rules are complex and basic. Thanks for joining  and have fun.")
.addField("Be respectful", "There's no reason to be insulting. Understand the difference between banter and insults. Any and all signs of disrespect will not be tolerated. Mods/Staff have the right to punish accordingly. 👈 👌 \nBeing obnoxious, annoying, childish, or a general attention seeker can you get you kicked without warning subjective to the secret police.")
.addField("The list of \"Don't\" -s", "-Don't Text spam or COMPLETLY CONTROL THE MIC or you can get muted. 👎\n-Don't advertise servers or anything else unless asked, even through PMs. 👎\n-Don't have an offensive name or avatar and keep a legible name or nickname. 👎\n")
.addField("Channels", "The general is where all members conversation take place. The Bot Commands is where all bot commands go.")
.addField("Roles", "No asking for a mod/staff role. Even ironically asking can get you kicked.")
.addField("How moderation works", "We are now working with a 2 warning system.\n1st Warning: Mute for 1 - 15 days, depends on the violation.\n2nd Warning: kicked or Banned!")
.addField("Rule 1", "Spamming is forbidden in all channels.")
.addField("Rule 2", "Keep profanity to a minimum.")
.addField("Rule 3", "Respect all staff members.")
.addField("Rule 4", "Keep conversations in the corresponding channels.")
.addField("Rule 5", "Racism and harrasment are forbidden.")
.addField("Rule 6", "All members should be treated equally.")
.addField("Rule 7", "Do not discuss religious or political matters as it can create conflicts.")
.addField("Rule 8", "Staff should never talk about disclosed staff info.")
.addField("Rule 9", "Do not advertise other servers unless you were given permission, If any staff members are abusing their permissions report to it to me.")
.addField("Rule 10", "No cool dogs. (insta ban)")
.addField("Rule 11", "Selfbots are permitted but userbots are not. the only difference between a selfbot and a user bot is a single line of code in your message handler.\n`if (message.author.id !== client.user.id) return`")
.addField("Our non expiring invite", "https://discord.gg/6SZnUbG")
.setColor("#53A6F3")
.setImage("https://cdn.discordapp.com/attachments/301425329963270154/319121512177074176/obey_the_rules.jpg")
message.channel.sendEmbed(
            embed, {
                disableEveryone: true
            }
        ); 
}