const fs = require('fs');

module.exports = (client, Discord) => {

    const commandFiles = fs.readdirSync('commands').filter(file => file.endsWith('.js'));

    for(const file of commandFiles) {

        const command = require(`../commands/${file}`);
        client.commands.set(command.name, command, command.desc, command.perms, command.aliases, command.syntax);
        console.log(`Loaded ${command.name}`);

    }

}