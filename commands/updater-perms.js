module.exports = {

    name: 'updateperms',
    desc: 'Updates permissions in a certain channel with a certain role',
    perms: 'ADMINISTRATOR',
    aliases: 'up',
    syntax: '<Channel ID> <Role ID> <Permission/s nam/s>',
    execute(message, args) {

        if(args.length < 4 || args.length > 4) return message.reply('Syntax - !--updateperms <Channel ID> <Role ID> <"ADD" or "REMOVE"> <Any amount of permission nodes (Uppercase)>');

        const channelID = args.shift();
        const { guild } = message;
        const channel = guild.channels.cache.get(channelID);

        if(!channel) return message.reply('Unknown Channel');

        const roleID = args.shift();
        const role = guild.roles.cache.get(roleID);

        if(!role) return message.reply('Unknown Role');

        const action = args.shift().toLowerCase();

        if(action !== 'add' && action !== 'remove') return message.reply('Please provide either "ADD" or "REMOVE" as an action');

        const { validPermissions } = require('../Info/permissionHolder');

        validPermissions.join(' ').toUpperCase().split(' ');

        for(const arg of args) {

            if(!validPermissions.includes(arg)) {

                let allPerms = '';
                
                for(const perm of validPermissions) {

                    allPerms += `${perm}, `

                }

                allPerms = allPerms.substring(0, allPerms.length - 2);

                const errorMsg = `Unknown permission node: ${arg} Specify one of the following in uppercase:
        
                ${allPerms}`;

                message.reply(errorMsg);

            }

        }

        channel.overwritePermissions([

            {

                id: roleID,
                allow: action === 'add' ? args : [],
                deny: action === 'remove' ? args : []

            }

        ]);

        message.reply('Channel permissions updated');

    }

}