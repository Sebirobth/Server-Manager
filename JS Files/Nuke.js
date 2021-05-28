module.exports = {

    name: 'nuke',
    description: 'Countdown from specified number, kick user, chance to send cat image',
    execute(message, args) {

        if (!args[0]) return message.channel.send('Please provide a countdown number and member to kick');

        if (args[0] && !args[1]) return message.channel.send('Please provide a user to kick');

        if (args[0] && args[1]) {

            const mentionMember = message.mentions.users.first();
            const rndNum = Math.ceil(Math.random() * 10);

            function countdown(callback) {

                callback();

            }

            function kickUser() {

                countdown(() => {

                    for (let i = args[0]; i > -1; i--) {

                        message.channel.send(i);

                    }

                })

            }

            kickUser();

            mentionMember.ban('FSR');

        }

    }

}