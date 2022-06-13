const {con} = require("../../../Utils/Database");
const {getIP, timeToGive} = require("../../../Utils/Math");
const {getKeyData} = require("../get/key");
const {response} = require("express");
const {responces} = require("../../../Utils/responces");
const {checkRegistrationData} = require("../checks/user");
const {getProgramData} = require("../get/program");

addUser = async (appKey, username, password, hwid, userKey) => {
    //TODO Hash passwords

    let expires = timeToGive(await getKeyData(appKey))

    con.query('INSERT INTO users (program, username, password, expires, hwid, ip) VALUES(?, ?, ?, ?, ?, ?)',
        [appKey, username, password, expires, hwid, getIP()]);

    return responces.SUCCESS;
}

register = async (appKey, username, password, userKey, hwid) =>
{
    let appData = getProgramData(appKey)
    let checkReg = checkRegistrationData(appData.appName)

    if(checkReg !== responces.SUCCESS)
        return checkReg;

    let key = getKeyData(userKey);

    if(key.used == 1)
        return responces.KEY_USED;

    con.query(' UPDATE progkeys SET used=1, c_used_by=? WHERE program=? AND appKey=?', [username, appData.appName, userKey]);

    return addUser(appKey, username, password, hwid, userKey);
}

module.exports = { register }