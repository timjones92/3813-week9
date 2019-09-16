module.exports = function(db, app, ObjectID) {
    // Route to update a single product
    var result;
    app.post('/api/update', function(req, res) {
        if (!req.body) {
            return res.sendStatus(400);
        }
        product = req.body;
        var objectid = new ObjectID(product._id);
        const collection = db.collection('products');
        collection.updateOne({_id:objectid}, {$set:{name:product.name, description:product.description, price:product.price, units:product.units}}, () => {
            // Return a response to the client to let them know the update was successful
            res.send({'ok': product._id});
        })
    });
}