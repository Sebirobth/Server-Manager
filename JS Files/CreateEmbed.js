module.exports = {

    name: 'createembed',
    description: 'Creates a embed',
    execute(message, args) {

        if (!args[0] && !args[1]) return message.channel.send('Please enter a title and description for your embed');

        if (!args[0]) return message.channel.send('Please enter a title for your embed');

        if (!args[1] && args[0]) return message.channel.send('Please enter a description for your embed');

        const Discord = require('discord.js');
        const newEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(args[0]);
        args.shift();
        newEmbed.setDescription(args);

        message.guild.channels.cache.get('847647998649696256').send(newEmbed);

    }

}