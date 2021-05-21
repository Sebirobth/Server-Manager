const {memberInfo} = require('../Members');

class adminStuff extends memberInfo {

    isAdmin() {

        return true;

    }

}

const allAdmins = [

    ['Arbiter']

]

module.exports = {adminStuff, allAdmins}