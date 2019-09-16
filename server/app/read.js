exports.findDocuments = function(collection, queryJSON, callback) {
    collection.find(queryJSON).toArray(function(err, docs) {
        console.log("Found the following records");
        console.log(docs);
        callback(docs);
    });
};