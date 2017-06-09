const Discord = require("discord.js");
const request = require('request');
exports.run = (message, args) => {
const client = message.client;
    message.guild.fetchMembers().then(() => {
      const mods = message.guild.members.array()
        .filter(m => !m.user.bot && client.util.isStaff(m))
        .sort((a, b) => SORT_MAP[a.presence.status] - SORT_MAP[b.presence.status])
        .map(m => `${STATUS_MAP[m.presence.status]} **${m.user.username}#${m.user.discriminator}**`);
      message.channel.send([`Mods for **${message.guild.name}**`].concat(mods));
});
}