const { MessageCollector } = require('discord.js');

module.exports = {

    name: 'ram',
    desc: 'Repeats after you',
    execute(message) {

        const filter = m => m.author.id === message.author.id;
        const collector = new MessageCollector(message.channel, filter, {

            max: 1,
            time: 1000 * 20

        })

        message.channel.send('What should I repeat?');

        collector.on('end', collected => {

            collected.forEach(value => {

                message.channel.send(value.content)

            })
            
        })

    }

}