require('dotenv').config();
const express = require('express');
const path = require('path');

const { Cases } = require('./models')

const { PORT } = process.env;

// changed from app to server
const server = express();

// Serving up the static build file for React
server.use(express.static(path.resolve(__dirname + '/react-ui/build')));

server.get('/heartbeat', (req, res) => {
    res.json({
        "is": "working"
    });
});

server.get('/cases', async (req, res) => {
    const cases = await Cases.findAll();
    res.json(cases)    // Cases is undefined
});

server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});