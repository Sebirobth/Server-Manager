function HandleErrors(Discord, client, message) {
    const { prefix } = require('../../config.json');

    const args = message.content.slice(prefix.length).trim().split(' ');
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd);

    if (message.author.bot) return false;

    if(!message.content.startsWith(prefix) || command == null) {
        message.reply('Invalid command');
        return false;
    };

    return true;
}

module.exports = (Discord, client, message) => {

    const { prefix } = require('../../config.json');

    const args = message.content.slice(prefix.length).trim().split(' ');
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd);

    if (HandleErrors(Discord, client, message) == false) return;

    command.execute(message, args, Discord);
}