require('dotenv').config();

const { Client, Collection } = require('discord.js');
const Discord = require('discord.js');

const client = new Client();
client.commands = new Collection();
client.events = new Collection();

['CommandHandler', 'EventHandler'].forEach(handler => {

    require(`./Handlers/${handler}`)(client, Discord);

})

client.on('message', message => {

    client.users.cache.get(`${message.author}`)

})

client.login(process.env.DISCORD_TOKEN);