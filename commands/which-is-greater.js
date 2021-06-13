module.exports = {

    name: 'which-is-greater',
    desc: 'Returns which number of 2 specified numbers is greater',
    aliases: 'wig',
    syntax: '<First Number> <Second Number>',
    execute(message, args) {

        if(!args[0] || !args[1] || isNaN(args[0]) || isNaN(args[1])) return message.channel.send('Invalid Numbers');

        if(args.length > 2 || args.length < 2) return message.reply('Too many or too little arguments');

        if(args[0] > args[1]) {

            message.channel.send(`${args[0]} is greater than ${args[1]}`);

        } else {

            
            message.channel.send(`${args[1]} is greater than ${args[0]}`);

        }

    }

}