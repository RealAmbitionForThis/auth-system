const {con} = require("../../../Utils/Database");
const {makeSesID, randomString} = require("../../../Utils/Math");
const {getProgramData, programExists} = require("../get/program");
const {responces} = require("../../../Utils/responces");
const crypto = require('crypto');

let APIVersion = "1.0" //Change this according to client if you ever make some big changes
//so people cant use old clients and it wont cause any issues

createSession = async (appKey, expiry) => {
    const sesID = randomString(23);
    con.query('INSERT INTO sessions(program, session, expires) VALUES(?, ?, ?)', [appKey, sesID, expiry]);
    return sesID;
}

startup = async (apiVersion, appKey) => {
    const data = await getProgramData(appKey);
    let session = responces.INVALID_SES;

    if (APIVersion != apiVersion)
        return responces.OUTDATED_CLIENT;

    if(await programExists(appKey))
        session = createSession(appKey, data.sesExpire * 60);

    return session;
}


module.exports = { startup }