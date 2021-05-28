module.exports = {

    name: 'destroy',
    description: 'Stops the discord bot entirely',
    execute(message, args, client) {

        client.destroy();

    }

}