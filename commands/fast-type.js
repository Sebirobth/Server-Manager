const { MessageCollector } = require('discord.js');

module.exports = {

    name: 'fast-type-game',
    desc: 'A fun little game',
    aliases: ['ft', 'ftg'],
    async execute(message, args) {

        function startGame() {

            let rngWords = [

                'dichlorodiphenyltrichloroethane',
                'chlorobenzylidenemalononitrile',
                'methylenedioxymethamphetamine',
                'cat',
                'antiestablishmentarianism',
                'uvulopalatopharyngoplasty',
                'hyperbetalipoproteinemia',
                'laryngotracheobronchitis',
                'Schizosaccharomycetaceae'

            ]
            let filter = m => m.author.id === message.author.id;
            let rngWord = rngWords[Math.floor(Math.random() * rngWords.length)];
            let justStarting = true;

            let collector = new MessageCollector(message.channel, filter, {

                max: 1,
                time: 1000 * 60

            });

            if(justStarting) {

                message.channel.send(`Repeat after me:\n\n**${rngWord}**`);

            }

            collector.on('end', collected => {

                    collected.forEach(value => {

                        if(value.content === rngWord) {

                            message.channel.send('You Got it Right');

                        } else {

                            message.channel.send('Nope');

                        }

                    })

            })
            
        }

        message.reply(`Starting Game, No cheating :DD...`);

        startGame();

    }

}