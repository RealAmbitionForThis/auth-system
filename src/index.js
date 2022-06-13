const express = require('express')
const { apiRouter } = require('./routes/api');
const {getProgramData} = require("./Core/api/get/program");
const {userExists, getUserData} = require("./Core/api/get/users");
const {checkUserStatus} = require("./Core/api/checks/user");
const {makeSesID, getCurrentTime, timeToGive} = require("./Utils/Math");
const {getKeyData} = require("./Core/api/get/key");
const app = express()

app.use('/api', apiRouter);

//If your uploading to heroku(or any other hosting) process.env.PORT
//will usually be defined, overwise the port for our server is going to be 9000
app.listen(process.env.PORT || 9000, async () => {
    try
    {
        console.log()
    } catch {
     console.log("Random Err")
    }
})