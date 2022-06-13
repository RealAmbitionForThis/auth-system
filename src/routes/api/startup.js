const { Router } = require('express');
const {startup} = require("../../Core/api/main/session");

// Handles requests made to /api/program
const startupRouter = Router();

startupRouter.post('/', async (req, res) => {
    //Returns session ID
    res.send(await startup(req.query.APIVersion, req.query.appKey))
});

module.exports = {
    startupRouter,
};