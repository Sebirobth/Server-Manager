module.exports = {

    name: 'ban',
    desc: 'Bans a member',
    perms: 'BAN_MEMBERS',
    syntax: '<Member to Ban>',
    execute(message, args) {

        if(!args[0]) return message.reply('No Member Specified');

        const target = message.mentions.members.first();

        target.ban();

        message.channel.bulkDelete(1);

        message.channel.send(`${message.guild.members.cache.get(target.id)} has been banned`);

    }

}