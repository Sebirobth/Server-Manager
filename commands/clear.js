module.exports = {

    name: 'clear',
    desc: 'Clears a specified amount below 100',
    perms: 'KICK_MEMBERS',
    aliases: 'c',
    syntax: '<Clear Amount>',
    execute(message, args) {

        if(!args[0]) return message.reply('No Number of Messages Specified');

        message.channel.bulkDelete(args[0]).then(() => {

            message.channel.send(`${args[0]} messages have been removed`);

        });

    }

}