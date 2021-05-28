module.exports = {

    name: 'help',
    description: 'Displays help',
    execute(message, args) {

        const helpCmds = [

            'Ban',
            'Clear',
            'CreateEmbed',
            'Help',
            'Kick',
            'Nuke',
            'Test',
            'CreateChannel'

        ]

        const helpDescs = [

            '- Bans a member',
            '- Clears a specified amount of messages',
            '- Creates a embed',
            '- Current Documented Commands',
            '- Kicks a user',
            '- (WIP)',
            '- Test Command',
            '- Takes in a channel name, type of channel, and channel category ID to create a new channel'

        ]

        const Discord = require('discord.js');
        const helpEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('All Commands')
            .addField('Cmds', helpCmds)
            .addField('Descriptions', helpDescs)
            .setTimestamp()
            .setFooter('Help');

        message.channel.send(helpEmbed);

    }

}