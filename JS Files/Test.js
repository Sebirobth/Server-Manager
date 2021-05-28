module.exports = {

    name: 'test',
    description: 'Just a test command',
    execute(message, args) {

        const banDesc = require('./Ban');

        message.channel.send(banDesc.description);

    }

}