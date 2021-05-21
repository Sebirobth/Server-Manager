const { Client, User, ClientUser, GuildManager } = require('discord.js');
const client = new Client();
const token = 'ODM5NTU0NDE0ODg0NDIxNjQz.YJLV-g.GyDyOv3CHZOZf_QaRmSLy7tQRY0';
const {Jimmy, Arbiter, KrYptic, ServerManager, allServerMembers} = require('./JS Files/Class Files/Class Variables')
const {allCommands} = require('./JS Files/HelpCommands')
let {serverBits, serverBitsInc} = require('./JS Files/Variable Oriented/Server Bits')
const {allAdmins} = require('./JS Files/Class Files/Admins')

client.once('ready', () => {
    console.log('Server Manager Running');
})

client.on('message', message => {
    //Msg Variables
    const messageChannel = message.channel;
    const messageContent = message.content;
    const messageLowerCase = messageContent.toLowerCase();

    if(messageLowerCase == 'server members') {

        messageChannel.send(allServerMembers);

    }

    if(messageLowerCase == 'test') {

        messageChannel.send('Im Alive')

    }

    if(messageLowerCase == 'help') {

        messageChannel.send(allCommands);

    }

    if(typeof messageLowerCase == 'string') {

        serverBits += serverBitsInc;

    }

    if(messageLowerCase == 'serverbits') {

        messageChannel.send(serverBits);

    }

    if(messageLowerCase == 'all admins') {

        messageChannel.send(allAdmins);

    }

})

client.login(token);