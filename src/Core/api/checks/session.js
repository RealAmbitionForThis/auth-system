const {con} = require("../../../Utils/Database");
const {responces} = require("../../../Utils/responces");
const {getCurrentTime} = require("../../../Utils/Math");
const {userExists} = require("../get/users");
const {getProgramData} = require("../get/program");


checkSession = (sessionData) =>
{
    if(getCurrentTime() > sessionData.expires)
        return responces.INVALID_SES;

    return responces.SUCCESS;
}

module.exports = { checkSession }