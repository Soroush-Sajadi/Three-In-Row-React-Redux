const express = require('express');
const app = express()
const cors = require('cors');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const dataBase = require('./DB/three-in-row.json');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.json(dataBase);
})


const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))