const config = require('../config.json');
exports.run = (client, message, args) => {
  var evalcode = message.content.split(" ").splice(1).join(" ");
  try {
    var evaled = eval(evalcode);
    if (typeof evaled !== "string")
    evaled = require("util").inspect(evaled);
    message.channel.sendMessage("Output:\n```js\n" + clean(evaled) + "```");
  }
  catch (err) {
    message.channel.sendMessage("Error: " + clean(err));
  }

  function clean(text) {
    if (typeof(text) === "string") {
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    }
    else {
      return text;
    }
  }
}
