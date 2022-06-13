const {con} = require("../../../Utils/Database");
const {responces} = require("../../../Utils/responces");
const {getCurrentTime} = require("../../../Utils/Math");
const {userExists} = require("../get/users");

checkUserStatus = async (userData) => {
    if(userData.paused != 0)
        return responces.PAUSED;

    if(userData.banned == 1)
        return responces.BANNED;

    if(getCurrentTime() > userData.expires)
        return responces.NO_SUBSCRIPTION;

    return responces.SUCCESS;
}

checkHWID = (programData, userData, hwid) =>
{
    if (userData.hwid === '0')
        con.query('UPDATE users SET hwid=? WHERE program=? AND username=?', [hwid, programData.program, userData.username]);
    else if (userData.hwid != hwid)
        return responces.INVALID_HWID;

    return responces.SUCCESS;

}

checkRegistrationData = async (programName, username) => {
    if (await userExists(programName, username))
        return responces.USERNAME_EXISTS;

    return responces.SUCCESS;
}

module.exports = { checkUserStatus, checkHWID, checkRegistrationData }