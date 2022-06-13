const {con} = require("../../../Utils/Database");

getSessionData = async (sesID) => {
    return new Promise((resolve, reject) => {
        con.query('SELECT * FROM sessions WHERE session=?', [sesID], (err, res) => {
            return resolve(res[0]);
        });
    });
}

module.exports = { getSessionData }