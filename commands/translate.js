const translate = require('@iamtraction/google-translate');

module.exports = {

    name: 'translate',
    desc: 'Translates a message',
    syntax: '<ISO Code> <Message to Translate>',
    execute(message, args) {

        if(!args[0] || !args) return message.channel.send('Invalid Arguments');

        const ISO = args.join(' ').slice(0, 2);

        translate(args.join(' '), { to: ISO }).then(res => {

            message.channel.send(`Translation:\n\n${res.text.slice(2, res.text.length)}`)

        })

    }

}