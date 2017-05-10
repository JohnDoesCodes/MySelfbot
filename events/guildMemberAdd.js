module.exports = member => {
      if(!guilds[member.guild.id]) return;
      if(guilds[member.guild.id].joinmessage === false) return;
      let welcomechannel = client.channels.get(guilds[member.guild.id].channel)
      let welcomemessage = guilds[member.guild.id].joinmessage
      var newwelcome = welcomemessage.replace("{user}", "<@" + member.id + ">"); 
      welcomechannel.send(newwelcome);

}