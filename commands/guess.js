module.exports = {

    name: 'guess',
    desc: 'Guess a number',
    execute(message, args) {

        let rndNum = Math.ceil(Math.random() * 10).toString();

        if(!args || args > 10 || args < 1) return message.reply('Syntax: <number less than 10 and greater than 0>');

        if(isNaN(args)) return message.reply('Argument/s is not a number');

        message.reply(`Chosen number was ${rndNum}\n`);

        if(args != rndNum) return message.channel.send(`${args} is not at all equal to ${rndNum}`);

        if(args == rndNum) return message.channel.send(`${args} is equal to ${rndNum}.\nCongrats!`);

    }

}