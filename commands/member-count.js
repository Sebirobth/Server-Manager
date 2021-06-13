module.exports = {

    name: 'member-count',
    desc: 'Displays the member count',
    aliases: 'mc',
    execute(message) {

        message.channel.send(`Current member counts is: ${message.guild.memberCount}`);

    }

}