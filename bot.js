const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NzMyMTczMTg5NTEzNDc4MjM1.Xw2jUg.JyZg6BAddpudgpJ8UR1ntvW4aEM);//BOT_TOKEN is the Client Secret
