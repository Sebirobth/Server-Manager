module.exports = {

    name: 'kick',
    desc: 'Kicks a member',
    perms: 'KICK_MEMBERS',
    execute(message, args) {

        if(!args[0]) return message.reply('No Member Specified');

        const target = message.mentions.members.first();

        target.kick();

        message.channel.bulkDelete(1);

        message.channel.send(`${message.guild.members.cache.get(target.id)} has been kicked`);

    }

}