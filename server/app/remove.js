module.exports = function(db, app, ObjectID) {
    // Route to delete a single product
    app.post('/api/delete', function(req, res) {
        if (!req.body) {
            return res.sendStatus(400);
        }
        productID = req.body.productid;
        // Create a new mongo Object ID from the passed in _id
        var objectid = new ObjectID(productID);
        const collection = db.collection('products');
        // Delete a single product based on unique ID
        collection.deleteOne({_id:objectid}, (err, docs) => {
            // Get a new listing of all items in the database and return to client
            collection.find({}).toArray((err, data) => {
                // Return a response to the client to let them know the delete was successful
                res.send(data);
            });
        });
    });
};