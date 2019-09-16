module.exports = function(db, app) {
    // Route to get list of all items from the database
    app.get('/api/read', function(req,res) {
        const collection = db.collection('products');
        collection.find({}).toArray((err, data) => {
            res.send(data);
        });
    });
};