module.exports = {

    name: 'repeat-after-me',
    desc: 'Repeats after you',
    syntax: 'Message to Repeat',
    aliases: 'ram',
    execute(message, args) {

        if(!args) return message.reply('Please provide something for me to repeat');

        message.channel.send(typeof args == 'string' ? args : args.join(' '));

    }

}