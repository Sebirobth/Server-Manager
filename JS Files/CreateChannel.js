const { execute } = require("./Test");

module.exports = {

    name: 'createchannel',
    description: 'Creates a new text channel',
    execute(message, args) {

        if (!args[0]) return message.reply('Please provide 3 args');

        if (args.length > 3) return message.reply('Too many args / Only 1 word channels allowed');

        if (args.length < 3) return message.reply('Too little args');

        if (args.length === 3) {

            message.guild.channels.create(args[0], {

                    type: args[1]

                })
                .then((channel) => {

                    channel.setParent(args[2]);

                })
                .catch();

            const Discord = require('discord.js');
            const channelEmbedInfo = new Discord.MessageEmbed()
                .setTitle('Created Embed: ')
                .setDescription(`Title: ${args[0]}\nType: ${args[1]}\nCategory ID: ${args[2]}`)
                .setFooter('Embed')
                .setTimestamp();

            message.channel.send(channelEmbedInfo);

        }

    }

}