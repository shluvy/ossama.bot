const Discord = require('discord.js');
const client = new Discord.Client();


client.on("message", message => {
const voiceChannel = message.member.voiceChannel;
 if (message.content === "/join") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.channel.send('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
});
client.login('N
            X4xwA7azDsV37CeBnWqM');
