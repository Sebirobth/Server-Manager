const Config = require('../../config.json');

module.exports = (Discord, client, member) => member.guild.channels.cache.get(Config.ICIDs.welcome_channel).send(`Welcome ${member.name}!`);