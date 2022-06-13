const { Router } = require('express');
const { programRouter } = require('./program');

const apiRouter = Router();

apiRouter.use('/program', programRouter);

module.exports = {
    apiRouter,
};