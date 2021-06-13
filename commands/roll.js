module.exports = {

    name: 'roll',
    desc: 'Rolls a random number between 2 specified numbers',
    execute(message, args) {

        let randomNumberFSR = Math.ceil(Math.random() * 100);

        if(!args[0]) return message.reply('Specify a minimum and maximum roll amount');

        if(!args[1]) return message.reply('Please provide a maximum roll amount');

        if(isNaN(args[0] + args[1])) return message.reply('Invalid number');

        if(args[0] === args[1]) return message.reply('Your minimum roll amount cannot be the same as your maximum roll amount');

        let rndNum = Math.ceil(Math.random() * args[1]);

        if(rndNum < args[0]) return rndNum += args[0];

        if(rndNum > args[1]) return rndNum -= args[1];

        if(randomNumberFSR == 10) return message.reply('You rolled a 2093749082048230458205803850239072904701748902757239573952957230752042428903784907402');

        message.reply(`You rolled a ${rndNum}`);

    }

}