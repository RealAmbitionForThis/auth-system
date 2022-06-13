const {getProgramData} = require("../get/program");
const {getUserData} = require("../get/users");
const {checkUserStatus} = require("../checks/user");
const {responces} = require("../../../Utils/responces");
const {getKeyData} = require("../get/key");
const {con} = require("../../../Utils/Database");
const {getIP, timeToGive} = require("../../../Utils/Math");

activateKey = async (appKey, username, userKey) => //userKey is key, but I didnt think naming through will this calling appKey 2 diffrent things
{
    const programData = await getProgramData(appKey);
    const userData = await getUserData(username);

    const userCheck = checkUserStatus(userData)

    if (userCheck !== responces.NO_SUBSCRIPTION || userCheck !== responces.SUCCESS)
        return userCheck;

    const key = await getKeyData(userKey);
    let time = timeToGive(key);

    if (key.used == 1)
        return responces.KEY_USED;

    con.query('UPDATE users SET expires=? WHERE program=? AND username=?', [time, appKey, username]);
    con.query('UPDATE progkeys SET used=1, used_by=? WHERE program=? AND appKey=?', [username, appKey, userKey]);

    return responces.SUCCESS;
}

module.exports = { activateKey }