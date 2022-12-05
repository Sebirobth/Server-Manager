module.exports = {
    name: 'clear',
    execute(msg, args, dc) {
        if (args.length != 1)
            return msg.reply('1 Argument Required');

        msg.channel.bulkDelete(parseInt(args[0]));
        msg.reply(`Deleted ${parseInt(args[0])} messages`);
    }
}