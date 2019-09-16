module.exports = function(db,app) {
    // Server-side validation if id exists
    app.post('/api/checkvalidid', function(req, res) {
        if (!req.body) {
            return res.sendStatus(400);
        }
        product = req.body;
        const collection = db.collection('products');
        // Check for duplicate id's
        collection.find({'id':product.id}).count((err, count) => {
            if (count == 0) {
                res.send({success:1, topnum:0});
            } else {
                // On send back highest used number
                collection.find({}, {sort: {id: -1}, limit: 1}).toArray(function(err, items) {
                    res.send({success:0, topnum:items[0].id});
                });
            }
        });
    });
}