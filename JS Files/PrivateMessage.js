module.exports = {

    name: 'dm',
    description: 'Dms specified person',
    execute(message, args, client) {

        if (args.length < 2) return message.reply('Too little args');

        if (args.length > 1) {

            const member = message.mentions.users.first();

            if (!member) return message.reply('Invalid member');

            if (args.length > 1) {
                const Discord = require('discord.js');
                const privateEmbed = new Discord.MessageEmbed()
                    .setTitle(`${message.author} sent you a message from\nServer: ${message.guild}`)
                    .setColor('RANDOM');

                args.shift()

                for (let i = 0; i < args.length; i++) {

                    args[i] = ' ' + args[i] + ' ';

                }

                privateEmbed.setDescription(args.join());

                member.send(privateEmbed);

            }

        }

    }

}