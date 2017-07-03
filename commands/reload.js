
const main = require('../self.js');
exports.run = (client, message, args) => {
  let cmd = args.join(' ');
  main.reload(message, cmd);
};
