const { Collection } = require('discord.js');

module.exports = {

    name: 'help',
    desc: 'Pretty Obvious',
    async execute(message) {

        const fs = require('fs');

        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

        const commandCollection = new Collection();

        let commands = [];

        for(const file of commandFiles) {

            const command = require(`../commands/${file}`);

            commands.push(`${command.name}${command.syntax ? ' - ' + command.syntax : ''}`, command.desc, `${command.perms ? `Required Perms: ${command.perms}` : ''}`, `${command.aliases ? `Aliases: ${command.aliases}` : ''}`, '\n');

            commandCollection.set(command.name, command.desc, command.perms);

        }

        message.channel.send(commands.join('\n\n'))

    }

}