module.exports = {

    name: 'clear',
    description: 'Clears a certain amount of messages',
    async execute(message, args) {

        if (!args[0]) return message.channel.send('Please enter a delete amount');

        if (isNaN(args[0])) return message.channel.send('Please enter a real number');

        if (args[0] > 100) return message.channel.send('Maximum amount of deletions is 100');

        if (args[0] < 1) return message.channel.send('Please enter a number 1 or above');

        await message.channel.messages.fetch({ limit: args[0] }).then(messages => {

            message.channel.bulkDelete(messages);

        }, 1000);

    }

}