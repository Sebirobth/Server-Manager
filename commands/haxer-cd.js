const { prefix } = require('../config.json');

module.exports = {

    name: 'haxer-cd',
    desc: '...',
    perms: 'ADMINISTRATOR',
    aliases: ['hxcd', 'hx'],
    execute(message) {

        const code = message.content.slice(prefix.length).trim();

        if(!code) return;

        code;

    }

}