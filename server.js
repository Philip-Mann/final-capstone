require('dotenv').config();
const express = require('express');
const path = require('path');

const { Cases } = require('./models')

const { PORT } = process.env;

// changed from app to server
const server = express();

// Serving up the static build file for React
server.use(express.static(path.resolve(__dirname + '/react-ui/build')));
server.use(express.json());

server.get('/heartbeat', (req, res) => {
    res.json({
        "is": "working"
    });
});

// getting Cases table from DB
server.get('/api/cases', async (req, res) => {
    const cases = await Cases.findAll();
    res.json(cases);
});

// getting cases from Cases table from DB by id
server.get('/api/cases/:id', async (req, res) => {
    const caseId = req.params.id;
    const caseDataById = await Cases.findAll({
        where: {
            id: caseId
        }
    });
    res.json(caseDataById);
});

server.post('/api/cases', async (req, res) => {
    console.log(req.body)   //empty object
    const { name, race, sex, age, height, location,
            year, images, body_condition,
            description, characteristics, agencies, cod } = req.body;
            console.log("name:",name)
            const newCase = await Cases.create({
                name, 
                race,
                sex,
                age,
                height,
                location,
                year,
                images,
                body_condition,
                description,
                characteristics,
                agencies,
                cod
            });
        console.log('new case entered successfuly', req.body);
        res.send({
            "message": "new case created successfully",
            "id": newCase.id
        });
});

server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});