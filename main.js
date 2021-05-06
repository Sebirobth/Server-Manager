const { Client, User, ClientUser } = require('discord.js');
const client = new Client();
const token = 'ODM5NTU0NDE0ODg0NDIxNjQz.YJLV-g.GyDyOv3CHZOZf_QaRmSLy7tQRY0';
const prefix = '-';
var records = [
    recordInfo1
]
var recordInfo1;
var helpCommands = [
    'Help',
    'Kumatora',
    'Test',
    'tutorial',
    'admin'
]
const tutorialLink = 'https://www.youtube.com/watch?v=j_sD9udZnCk';
const websiteTutorialLink = 'https://www.freecodecamp.org/';

client.once('ready', message => {
    console.log('Server Manager Running');
})

client.on('message', message => {
    const MessageChannel = message.channel;
    const MessageContent = message.content;
    const MessageLowerCase = MessageContent.toLowerCase();
    const rngNum = Math.ceil(Math.random() * 2);
    const rngNum2 = Math.ceil(Math.random() * 3)
    const rngNum3 = Math.ceil(Math.random() * 5);
    var userGold = message.member.roles.cache.has('839964004779556884');

    function Help(){
        switch(rngNum){
            case 1:
                MessageChannel.send(helpCommands);
                break;
            case 2:
                MessageChannel.send('No')
                break;
        }
    }

    function kumatora(){
        MessageChannel.send('According to the WIKI:\nGAAAAAAAAAAAAAAAAAAAAAAAAY');
    }

    function showTutorialInfo(link, web){
        MessageChannel.send(String(web) + '\n' + String(link))
    }

    function showIfAdmin(){
        if(userGold){
            MessageChannel.send('You have admin');
        } else {
            MessageChannel.send('You do not have admin');
        }
    }

    function gold(){
        if(userGold){
            switch(rngNum3){
                case 1:
                    MessageChannel.send('Le Best Boi');
                    break;
                case 2:
                    MessageChannel.send('Best of Best Bois');
                    break;
                case 3:
                    MessageChannel.send('Very Good Boi');
                    break;
                case 4:
                    MessageChannel.send('EA Sports\nIts in the gold');
                    break;
                case 5:
                    MessageChannel.send('Yes Boi');
                    break;
            }
        } else {
            MessageChannel.send('Come back when your a little more, mmmmmmmm, golden');
        }
    }

    if(MessageLowerCase == 'test'){
        MessageChannel.send('Im Working');
    }

    if(MessageLowerCase == 'help'){
        Help();
    }

    if(MessageLowerCase == 'kumatora'){
        switch(rngNum2){
            case 1:
                MessageChannel.send('Gay');
                break;
            case 2:
                MessageChannel.send('Lesbian');
                break;
            case 3:
                kumatora();
                break;
        }
    }

    if(MessageLowerCase == 'tutorial'){
        showTutorialInfo(tutorialLink, websiteTutorialLink);
    }

    if(MessageLowerCase == 'admin'){
        showIfAdmin();
    }

    if(MessageLowerCase == 'gold'){
        gold();
    }
})

client.login(token);