require('dotenv').config();

const { Client, Collection } = require('discord.js');
const Discord = require('discord.js');
const config = require('./config.json');
const fs = require('fs');
const handlers = fs.readdirSync('./Handlers');

console.log(`Running discord version ${Discord.version}\nServer Manager`);

const client = new Client({ intents: config.intents.map(x => Discord.GatewayIntentBits[x]) });
client.commands = new Collection();
client.events = new Collection();

handlers.forEach(handler => {
    require(`./Handlers/${handler}`)(client, Discord);
})

client.login(process.env.DISCORD_TOKEN);