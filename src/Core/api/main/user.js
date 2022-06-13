const {getProgramData, programExists} = require("../get/program");
const {getUserData, userExists} = require("../get/users");
const {responces} = require("../../../Utils/responces");
const {checkUserStatus, checkHWID} = require("../checks/user");
const {con} = require("../../../Utils/Database");
const {getIP} = require("../../../Utils/Math");

login = async (appKey, username, password, hwid = null) => {
    const userData = await getUserData(username);
    const applicationData = await getProgramData(appKey);

    if (!await programExists(appKey))
        return responces.PROG_DOSNT_EXIST;

    if (!await userExists(applicationData.appName, username))
        return responces.INVALID_USERNAME;

    if (userData.password !== password)
        return responces.WRONG_PASS;

    const userStatus = checkUserStatus(userData);

    if (userStatus !== responces.SUCCESS)
        return userStatus;

    const hwidStatus = checkHWID(applicationData, userData, hwid)

    if (hwidStatus !== responces.SUCCESS && hwid !== null)
        return hwidStatus;

    con.query('UPDATE users SET ip=? WHERE program=? AND username=?', [getIP(), applicationData.program, userData.username]);

    return [[responces.SUCCESS], [userData]];
}

module.exports = { login }
