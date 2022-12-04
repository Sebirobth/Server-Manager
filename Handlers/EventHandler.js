const fs = require('fs');

module.exports = (client, Discord) => {

    console.log('\nLoading Events...\n');

    const loadDir = (dirs) => {

        const eventFiles = fs.readdirSync(`./Events/${dirs}`).filter(file => file.endsWith('.js'));

        for(const file of eventFiles) {

            console.log(`Loaded ${file.replace('.js', '')} event`);

            const event = require(`../Events/${dirs}/${file}`);
            const eventName = file.split('.')[0];
            client.on(eventName, event.bind(null, Discord, client));

        }

    }

    ['client', 'guild'].forEach(folder => {

        loadDir(folder);

    })

    console.log('\n');

}