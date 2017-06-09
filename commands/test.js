const snekfetch = require('snekfetch');
const Discord = require("discord.js");
exports.run = (client, message) => {
message.channel.send('**Searching...**')
      .then((message) => {
        snekfetch.get(
          `https://en.wikipedia.org/w/api.php?action=query&list=search&srwhat=text&srprop=sectionsnippet&format=json&srsearch=${message.content}`
        )
        .then((res) => res.body.query.search)
        .then((results) => {
          if (!results[0]) return Promise.reject('NO RESULTS');
          return results[0];
        })
        .then((result) => snekfetch.get(
          `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=${encodeURIComponent(result.title)}`
        ))
        .then((res) => res.body.query.pages[Object.keys(res.body.query.pages)])
        .then((page) => {
          const url = `https://wikipedia.org/wiki/${encodeURIComponent(page.title)}`;
          return message.client.util.embed(url, page.title, `${page.extract.substring(0, 500)}... [Read more](${url.replace(/\(/, '%28').replace(/\)/, '%29')})`);
        })
        .then((embed) => message.edit({ embed }))
        .catch((err) => {
          message.client.error(err);
          message.edit('**No results found!**');
        });
});
}