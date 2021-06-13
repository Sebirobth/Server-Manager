const { Collection } = require('discord.js');

module.exports = {

    name: 'help',
    desc: 'Pretty Obvious',
    async execute(message, args) {

        const fs = require('fs');

        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

        const commandCollection = new Collection();

        let commands = [];

        for(const file of commandFiles) {

            const command = require(`../commands/${file}`);

            commands.push(`${command.name} -`, command.desc, `${command.perms ? `Required Perms: ${command.perms}` : ''}`, '\n');

            commandCollection.set(command.name, command.desc, command.perms);

        }

        const { MessageEmbed } = require('discord.js');

        const embed = new MessageEmbed()
            .addField('Commands', commands.join('\n\n'));

        message.channel.send(embed);

    }

}