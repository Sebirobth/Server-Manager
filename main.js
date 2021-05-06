const { Client } = require('discord.js');
const client = new Client();
const token = 'ODM5NTU0NDE0ODg0NDIxNjQz.YJLV-g.GyDyOv3CHZOZf_QaRmSLy7tQRY0';
const prefix = '-';

client.once('ready', () => {
    console.log('Server Manager Running');
})

client.on('message', message => {
    const MessageChannel = message.channel;
    const MessageContent = message.content;
    const MessageLowerCase = MessageContent.toLowerCase();

    function record(){
        if(!message.author.username == 'Server Manager#4394'){
            MessageChannel.send('Recorded');
        } else {
            MessageChannel.send('Invalid ID')
        }
    }

    function Help(){
        const rngNum = Math.ceil(Math.random() * 10);

        if(rngNum == 1 || rngNum == 2 || rngNum == 3 || rngNum == 4 || rngNum == 5 || rngNum == 6 || rngNum == 7 || rngNum == 8 || rngNum == 9){
            MessageChannel.send('CDs: Test, Help');
        } else if(rngNum == 10){
            MessageChannel.send('I need somebody, please ;-;');
        }
    }

    if(MessageLowerCase == 'test'){
        MessageChannel.send('Im Working');
    }

    if(MessageLowerCase == 'help'){
        Help();
    }

    if(MessageLowerCase == 'record'){
        record();
    }

    if(MessageLowerCase == 'play'){
        MessageChannel.send(info);
    }
})

client.login(token);