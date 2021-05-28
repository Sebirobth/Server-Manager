const path = require('path');
const fs = require('fs');
const { Client } = require('discord.js');
const Discord = require('discord.js');
const config = require('./config.json');
require('dotenv').config();

const commandFiles = fs.readdirSync('./JS Files').filter(file => file.endsWith('.js'));

const client = new Client();
client.commands = new Discord.Collection();

const {

    prefix

} = require('./config.json');


client.on('ready', () => {

    console.log('DevBot is running!');

})

client.on('message', message => {

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {

        client.commands.get(command).execute(message, args, client, Discord);

    } catch (err) {

        console.error(err);

        message.reply('Issue executing command');

    }

})

for (const file of commandFiles) {

    const command = require(`./JS Files/${file}`);
    client.commands.set(command.name, command);

}

client.login(process.env.DISCORD_TOKEN);