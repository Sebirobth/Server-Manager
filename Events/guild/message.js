module.exports = (Discord, client, message) => {

    const { prefix } = require('../../config.json');

    const args = message.content.slice(prefix.length).trim().split(' ');
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if(message.author.bot || !message.content.startsWith(prefix) || !command) return;

    function checkPermsArray() {

        for(let i = 0; i < command.perms.length; i++){ !message.guild.members.cache.get(message.author.id).hasPermission(command.perms) }

    }

    if(command.perms ? !message.guild.members.cache.get(message.author.id).hasPermission(command.perms) : false) {

        message.reply(`You must have permission **${command.perms}** to run this command`);

        message.guild.channels.cache.get('853530176348487690').send(client.users.cache.get(`${message.author.id}`).username + ' tried to use ```' + message.content + '```But didnt have the permissions:\n\n```' + command.perms + '```')

    } else {

        if(message.content.startsWith(prefix)) message.guild.channels.cache.get('853530176348487690').send(client.users.cache.get(`${message.author.id}`).username + ' used ```' + message.content + '```');

    }

    command.execute(message, args, Discord);

}