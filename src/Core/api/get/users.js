const {con} = require("../../../Utils/Database");

getUserData = async (username) => {
    return new Promise((resolve, reject) => {
        con.query('SELECT * FROM users WHERE username=?', [username], (err, res) => {
            return resolve(res[0]);
        });
    });
}

userExists = (programName, username) =>
{
    return new Promise((resolve, reject) => {
        con.query('SELECT username FROM users WHERE program=? AND username=?', [programName, username], (err, res) => {
            if(res.length === 1)
                return resolve(true);
            else
                return resolve(false);
        });
    });
}

module.exports = { userExists, getUserData }