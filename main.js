const { Client, User, ClientUser, GuildManager } = require('discord.js');
const client = new Client();
const token = 'ODM5NTU0NDE0ODg0NDIxNjQz.YJLV-g.GyDyOv3CHZOZf_QaRmSLy7tQRY0';
const prefix = '';
var records = [
    recordInfo1
]
var recordInfo1;
var helpCommands = [
    'Standard Commands:\n\n',
    'Help - Provides a List of Commands and What They Do\n',
    'Kumatora - Joke Command\n',
    'Test - Tests the Bot\n',
    'Tutorial - Provides a Link to 2 Tutorials\n',
    "Admin - Checks if You're Admin or Not\n",
    'AdminList - Displays all Admin Ranks\n',
    'ServerBits - Server Bits are Added Every Time a Person Types a Message in the Server\n',
    'UG - Pull out your Gun\n\n',
    'Admin Commands:\n\n',
    'UB - Chill with the Bullets Brandan!\n',
    'Gold - Pull out your Golden Gun\n',
    'Revive - Revive Everyone in the Server. What am I saying, your brandan\n'
]
var adminList = [
    'Arbiter'
]
const tutorialLink = 'https://www.youtube.com/watch?v=j_sD9udZnCk';
const websiteTutorialLink = 'https://www.freecodecamp.org/';
var gunEq = false;
var bazooka = false;
var gun = false;
var players = [
    'KrYptic',
    'Jimmy',
    'Carl-Bot',
    'Rythm',
    'EarthBot',
    'UwU',
    'Streamcord'
]
var playersDead = false;
var serverBits = 0;
var YTLink = '';
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
                    MessageChannel.send('You shoot');
                    break;
            }
        } else {
            MessageChannel.send('Come back when your a little more, mmmmmmmm, golden');
        }
    }

    function gun(){
        if(!gunEq){
            MessageChannel.send('You eqip your rusty gun')
            return gunEq = true;
        }

        if(gunEq){
        switch(rngNum3){
            case 1:
                MessageChannel.send('Pew Pew');
                break;
            case 2:
                MessageChannel.send('Bang Bang');
                break;
            case 3:
                MessageChannel.send('Pow Pow');
                break;
            case 4:
                MessageChannel.send('Bang Pow');
                break;
            case 5:
                MessageChannel.send('Pow Pow Bang');
                break;
        }
    }
    }

    function goldGun(){
        if(!gunEq){
                MessageChannel.send('You equip the golden gun');
                return gunEq = true;
        }

        if(gunEq){
        switch(rngNum3){
            case 1:
                MessageChannel.send('Chang Chang');
                break;
            case 2:
                MessageChannel.send('Bang Chang');
                break;
            case 3:
                MessageChannel.send('Nyooom');
                break;
            case 4:
                MessageChannel.send('Bang Pow');
                break;
            case 5:
                MessageChannel.send('You equip the golden bazooka');
                return bazooka = true;
                break;
        }
        }
    }

    function bazookaUse(){
        switch(rngNum3){
            case 1:
                MessageChannel.send('BAAAAAAAAAAAAM');
                break;
            case 2:
                MessageChannel.send('CL-CHING, PFFFFFFFFFF');
                break;
            case 3:
                MessageChannel.send('NYRRRRRRRRRRRRRRRR');
                break;
            case 4:
                MessageChannel.send('10 civilians killed');
                break;
            case 5:
                if(!playersDead){
                killAllPlayers();
                return playersDead = true;
                } else {
                    MessageChannel.send('Cl-CL-CL-Cl-CL........ POOOOOOOOOOM');
                }
                return bazooka = true;
                break;
        }
    }

    function killAllPlayers(){
        for(var i = 0; i < players.length; i++){
            MessageChannel.send(String(players[i]) + ' is dead');
        }
    }

    function test(){
        MessageChannel.send('Bot Working');
    }

    if(MessageLowerCase == 'test'){
        test();
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

    if(MessageLowerCase == 'gun' && !userGold){
        gun();
    } else if(MessageLowerCase == 'gun' && userGold && !bazooka){
        goldGun();
    } else if(MessageLowerCase == 'gun' && userGold && bazooka){
        bazookaUse();
    }

    if(MessageLowerCase == 'ub' && userGold){
        MessageChannel.send('Unequipped golden bazooka');
        return bazooka = false
    }

    if(MessageLowerCase == 'ug' && userGold && !bazooka){
        MessageChannel.send('You unequip the golden gun');
        return gunEq = false;
    } else if(MessageLowerCase == 'ug' && !userGold){
        MessageChannel.send('You unequip your gun');
        return gunEq = false;
    }

    if(MessageLowerCase == 'adminlist'){
        MessageChannel.send('Current Admins:\n\n' + adminList);
    }

    if(MessageLowerCase == 'reviveall' && playersDead == true && userGold){
        for(var i = 0; i < players.length; i++){
            MessageChannel.send(String(players[i] + ' revived\n'))
        }

        return playersDead = false;
    }

    if(MessageLowerCase == 'serverbits'){
        MessageChannel.send(String(serverBits));
    }

    if(typeof MessageContent == 'string'){
        return serverBits += 12000;
    }
})

client.login(token);