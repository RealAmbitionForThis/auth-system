const {con} = require("../../../Utils/Database");

getKeyData = async (appKey) => {
    return new Promise((resolve, reject) => {
        con.query('SELECT * FROM progkeys WHERE appKey=?', [appKey], (err, res) => {
            return resolve(res[0]);
        });
    });
}

module.exports = { getKeyData }