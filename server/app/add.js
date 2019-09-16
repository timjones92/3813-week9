exports.insertDocuments = function(collection, docArray, callback) {
    collection.insertMany(docArray, function (err, result) {
        console.log("Inserted the following documents into the collection: ");
        console.log(docArray);
        callback(result);
    });
}