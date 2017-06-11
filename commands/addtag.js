const Discord = require("discord.js");
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
let name = args[0];
    let contents = args.slice(1).join(" ");
    bot.db.get(`SELECT * FROM tags WHERE name = '${args[0]}'`).then(row => {
      if(!row) {
        bot.db.run(`INSERT INTO "tags" (name, contents) VALUES (?, ?)`, [name, contents]).then(()=>{
          msg.edit("Tag was added: "+name).then(setTimeout(msg.delete.bind(msg), 1000));
        });
      }
      else  msg.edit(`That tag already exists`).then(setTimeout(msg.delete.bind(msg), 1000));
    });
};
