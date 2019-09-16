const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'mydb'; // Database name
const colName = 'products';
const client = new MongoClient(url);

// Define a sequence of db operations 
const docArray = [
    {
        id: 1,
        name: "Thor T-Shirt",
        description: "T-Shirt with Marvel's Thor's logo.",
        price: 29.99,
        units: 33
    },
    {
        id: 2,
        name: "Captain America T-Shirt",
        description: "T-Shirt with Marvel's Captain America's logo.",
        price: 24.99,
        units: 50
    },
    {
        id: 3,
        name: "Ironman T-Shirt",
        description: "T-Shirt with Marvel's Ironman's logo.",
        price: 19.99,
        units: 45
    }
]
const queryJSONf = {}
const queryJSONup = { id: 2 };
const updateJSON = { id: 4 };
const queryJSONdel = { id: 3 };
const add = require('./add');
const update = require('./update');
const remove = require('./remove');
const read = require('./read');

const dbOperations = function(client, col) {
    add.insertDocuments(col, docArray, 
        () => {
            update.updateDocument(col, queryJSONup, updateJSON,
                () => {
                    remove.removeDocument(col, queryJSONdel, 
                        () => {
                            read.findDocuments(col, queryJSONf,
                                () => { client.close(); })
                        })
                })
        });
};

// Use connect method to connect to the Server
client.connect(function(err) {
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection(colName);
    dbOperations(client, collection);
});
