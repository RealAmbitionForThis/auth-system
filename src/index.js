const express = require('express')
const {apiRouter} = require("./routes/api");
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

//TODO make it E2EE