const STATUS_MAP = {
  online: '<:vpOnline:212789758110334977>',
  idle: '<:vpAway:212789859071426561>',
  offline: '<:vpOffline:212790005943369728>',
  dnd: '<:vpDnD:236744731088912384>',
  streaming: '<:vpStreaming:212789640799846400>',
};

const SORT_MAP = { online: 1, idle: 2, streaming: 3, dnd: 4, offline: 5, invisible: 6 };

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