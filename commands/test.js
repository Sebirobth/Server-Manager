const rndWords = require('random-words');

module.exports = {

    name: 'test',
    desc: 'Test command',
    perms: 'ADMINISTRATOR',
    execute(message) {

        console.log(rndWords.wordList.join('\n'));

    }

}