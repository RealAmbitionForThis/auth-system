const mysql = require('mysql');

//Change This To Your MySQL DB
//If you're testing this on a local server use this
/*
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'name'
 */
let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'skiddy'
});

con.connect(function(err) {
    if (err)
        return console.error('Error: ' + err.message);

    console.log('Connected!');
});

module.exports = { con }