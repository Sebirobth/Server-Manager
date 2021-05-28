module.exports = {

    name: 'ban',
    description: 'Bans a player specified',
    async execute(message, args) {

        if (message.member.roles.cache.has('847592145215815710') || message.member.roles.cache.has('847591807109955684')) {

            const member = message.mentions.users.first();

            if (member) {

                const memberTarget = message.guild.members.cache.get(member.id);

                memberTarget.ban().catch(() => {

                    message.reply('An error occured, but I saved the code from crashing!');

                });

                message.channel.send('User banned');

            } else {

                message.channel.send('You couldnt ban that member');

            }

            await message.channel.messages.fetch({ limit: 1 }).then(messages => {

                message.channel.bulkDelete(messages);

            }, 1000);

        } else {

            message.channel.send('You do not have permissions to ban that member');

        }

    }

}