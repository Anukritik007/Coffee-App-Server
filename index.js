const express = require('express');
const nedb = require('nedb');
const rest = require('express-nedb-rest');
const cors = require('cors');

const app = express();

const dataStore = new nedb({
    filename: "myArtWorksApp.db",
    autoload : true
});

const restAPI = rest();
restAPI.addDatastore('art',dataStore);

app.use(cors());
app.use('/',restAPI);

app.listen(3000);