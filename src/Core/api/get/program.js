const {con} = require("../../../Utils/Database");
//I didnt expect to add this part but on a discord screenshare someone asked why I didnt do it
//So I may aswell answer in advance for anyone wondering aswell
/*
    let data;
    con.query('SELECT * FROM program WHERE appKey=?', [appKey], function (err, res)
    {
        data = res;
    })
    return data;
 */
//This wont work because the callback is asynchronous
//It runs at a later time (when the outer function has already finished). So you can't directly move data like that.
//The 2 options where either use a sql driver that supports promises or promisify the callback to use async/await

getProgramData = async (appKey) => {
    return new Promise((resolve, reject) => {
        con.query('SELECT * FROM program WHERE appKey=?', [appKey], (err, res) => {
            return resolve(res[0]);
        });
    });
}

programExists = (appKey) =>
{
    return new Promise((resolve, reject) => {
        con.query('SELECT appKey FROM program WHERE appKey=?', [appKey], (err, res) => {
            if(res.length === 1)
                return resolve(true);
            else
                return resolve(false);
        });
    });
}

module.exports = { getProgramData, programExists }