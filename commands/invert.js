const Discord = require("discord.js");
var Jimp = require('jimp')
exports.run = (client, message, args) => {
if (message.mentions.users.size === 0) {
      const res = message.channel.send(':gear: generating...')
      Jimp.read(message.author.avatarURL, (err, avatar) => {
        if (err) return message.edit('failed to generate.')
        avatar.invert()
        avatar.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
          message.delete()
          message.channel.send({
            files: [{
              attachment: buffer,
              name: 'bringBack-sendFile.png'
            }]
          })
        })
      })
    } else {
      const res = message.channel.send(':gear: generating...')
      Jimp.read(message.mentions.users.first().avatarURL, (err, avatar) => {
        if (err) return message.edit('failed to generate.')
        avatar.invert()
        avatar.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
          message.delete()
          message.channel.send({
            files: [{
              attachment: buffer,
              name: 'bringBack-sendFile.png'
            }]
          })
        })
      })
    }

}