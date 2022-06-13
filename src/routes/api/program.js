const { Router } = require('express');

// Handles requests made to /api/program
const programRouter = Router();

//localhost:9000/api/program/test/tet
programRouter.get('/', (req, res) =>
{
    res.send('GET Request Received')
});

module.exports = {
    programRouter,
};