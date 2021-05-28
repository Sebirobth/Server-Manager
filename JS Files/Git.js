module.exports = {

    name: 'git',
    description: 'Displays git page',
    execute(message, args) {

        const Discord = require('discord.js');
        const gitEmbed = new Discord.MessageEmbed()
            .setTitle('Git Repository Info')
            .setDescription('Hosts all bot code on discord, minus the node modules and .env file')
            .addField('Repository', 'https://github.com/KrYptic-OwO/Manager')
            .setFooter('Git')
            .setTimestamp();

        message.channel.send(gitEmbed);

    }

}