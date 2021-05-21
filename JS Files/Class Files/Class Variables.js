const {memberInfo} = require('../Members');
const {adminStuff} = require('./Admins')
// Member Info Class
const Jimmy = new memberInfo('Jimmy', 'Jimmy', '494689211337801739');
const Arbiter = new adminStuff('Arbiter', 'Brandan', '547179036733079575');
const KrYptic = new memberInfo('KrYptic', 'Troy', '411550199966597141');
const ServerManager = new memberInfo('Server Manager', '', '839554414884421643');
const allServerMembers = [Jimmy.username, Arbiter.username, KrYptic.username, ServerManager.username];

module.exports = {Jimmy, Arbiter, KrYptic, ServerManager, allServerMembers}