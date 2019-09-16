module.exports = function(db, app, ObjectID) {
    // Route to get list of all items from the database
    app.post('/api/getproduct', function(req,res) {
        if (!req.body) {
            return res.sendStatus(400);
        }
        product = req.body;
        var objectid = new ObjectID(product.productid);
        const collection = db.collection('products');
        collection.find({_id: objectid}).toArray((err, data) => {
            res.send(data);
        });
    });
};