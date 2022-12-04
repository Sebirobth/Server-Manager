module.exports = {
    name: 'ping',
    execute(msg, args, dc) {
        msg.reply('Pong!');
    }
}