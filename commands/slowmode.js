module.exports = {

    name: 'slowmode',
    desc: 'Sets a slowode rate',
    perms: 'ADMINISTRATOR',
    async execute(message, args) {

        const { channel } = message;

        if(args.length > 1) return message.reply('Too many arguments');

        if(args[0] < 0) return message.reply('Duration must be a number greater than or equal to 0');

        let duration = args[0];

        if(duration > 21600) return message.reply('Duration must be below or equal to 21600');

        await channel.setRateLimitPerUser(duration).then(() => {

            message.reply(`Slowmode set to ${duration}`);

        }).catch(() => {

            message.reply('Duration must be a number');

        });

    }

}