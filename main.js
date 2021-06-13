require('dotenv').config();

const { Client, Collection } = require('discord.js');
const fs = require('fs');
const { prefix } = require('./config.json');

const client = new Client();
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles) {

    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command, command.desc, command.perms);
    console.log(`Loaded -${command.name}-`);

}

client.on('ready', () => {

    console.log('Server Manager is now online');

})

client.on('message', message => {

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    if(message.author.id === client.user.id) return;

    if(!client.commands.get(command)) return message.reply('Invalid command');

    client.commands.get(command).execute(message, args);

})

client.login(process.env.DISCORD_TOKEN);