const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http').Server(app);
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

app.use(cors());
app.use(bodyParser.json());
const url = 'mongodb://localhost:27017';
MongoClient.connect(url, {poolSize:10, useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
    // Callback function code. When we have a connection start the rest of the app
    if (err) { return console.log(err)}
        const dbName = 'mydb';
        const db = client.db(dbName);

        require('./app/add.js')(db,app);
})

