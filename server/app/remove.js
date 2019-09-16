exports.removeDocument = function(collection, queryJSON, callback) {
    collection.deleteOne(queryJSON, function(err, result) {
        console.log("Removed the documents with");
        console.log(queryJSON);
        callback(result);
    });
};