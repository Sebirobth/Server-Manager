const fs = require('fs');

module.exports = (client, Discord) => {

    const commandFiles = fs.readdirSync('commands').filter(file => file.endsWith('.js'));

    console.log('\nLoading Commands...\n');

    for(const file of commandFiles) {

        const command = require(`../commands/${file}`);
        client.commands.set(command.name, command);
        console.log(`Loaded ${command.name} command`);

    }

}