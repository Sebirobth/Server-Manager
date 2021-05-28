module.exports = {

    name: 'help',
    description: 'Displays help',
    execute(message, args) {

        const helpDescs = [

            'Ban - Bans a member',
            'Clear - Clears a specified amount of messages',
            'CreateEmbed - Creates a embed',
            'Help - Current Documented Commands',
            'Kick - Kicks a user',
            'Nuke - (WIP)',
            'Test - Test Command',
            'CreateChannel- Takes in a channel name, type of channel, and channel category ID to create a new channel',
            'DM - Pretty obvious'

        ]

        const Discord = require('discord.js');
        const helpEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('All Commands')
            .addField('Descriptions', helpDescs)
            .setTimestamp()
            .setFooter('Help');

        message.channel.send(helpEmbed);

    }

}