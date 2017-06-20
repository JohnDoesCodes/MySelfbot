const config = require('../config.json');
module.exports = (client, message) => {
  console.log(config)
        client.user.setGame(`xd`)
};
