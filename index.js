const express = require('express');
var cors = require('cors');
//var bodyParser = require('body-parser');
const { USERS } = require('./mock-data/user');
const deviceList = require('./mock-data/deviceList');
const { DEVICELIST } = require('./mock-data/deviceList');

const app = express();

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

app.use(cors());

app.get('/test', (req, res) => {
    res.send("Testing success!");
});

app.post("/login", (req, res) => {
    const { userName, password } = req?.body;
    console.log(userName, USERS[userName], USERS['khazi'], USERS);
    const user = USERS?.[userName] || {};
    user.token = new Date().toLocaleString().split(',')[0];
    
    res.send(user);
});

app.get('/employee', (req, res) => {
    res.send({
        name: 'Ram',
        age: 30,
        salary: 50000,
        id: '123456a'
    });
});

const isTokenValid = () => {
    return true;
};

app.post('/deviceList', (req, res) => {
    const { token } = req?.body;
    // is token valid, yes: return data, else return message saying token invalid

    if (isTokenValid(token)) {
        let deivceList = [];
        for(let i = 0; i <= 5000; i++) {
            deivceList.push(Object.assign(DEVICELIST[0], {
                deviceID: 'device_azam_programmer' + i,
                OSLicence: i,
                MicrosoftLicenceID: i
            }));
        }
        res.send(deivceList);
    }
    res.send({
        statusCode: 401,
        message: 'Token is Invalid'
    });
});

app.post('/addDevice', (req, res) => {
    const { data } = req?.body;
    res.send({
        message: 'success'
    });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`listning to your application on PORT: ${PORT}`);
});
