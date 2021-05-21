const { Client, User, ClientUser, GuildManager } = require('discord.js');
const client = new Client();
const token = 'ODM5NTU0NDE0ODg0NDIxNjQz.YJLV-g.GyDyOv3CHZOZf_QaRmSLy7tQRY0';

client.once('ready', () => {
    console.log('Server Manager Running');
})

client.on('message', message => {
    
    

})

client.login(token);