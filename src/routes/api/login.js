const { Router } = require('express');
const {startup} = require("../../Core/api/main/session");
const {login} = require("../../Core/api/main/user");

// Handles requests made to /api/program
const loginRouter = Router();

loginRouter.post('/', async (req, res) => {
    res.send(await login(req.query.appKey, req.query.username, req.query.password, req.query.hwid))
});

module.exports = {
    loginRouter,
};