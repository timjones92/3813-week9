module.exports = function(db, app) {
    //Route to manage adding a product
    app.post('/api/add', function(req, res) {
        if (!req.body) {
            return res.sendStatus(400);
        }
        product = req.body;
        const collection = db.collection('products');
        // Check for dupliacte id's
        collection.find({'id': product.id}).count((err, count) => {
            if (count == 0) {
                //if no duplicate
                collection.insertOne(product, (err, dbres) => {
                    if (err) throw err;
                    let num = dbres.insertedCount;
                    //send back to client number of items inserted and no error message
                    res.send({'num':num, err:null});
                })
            } else {
                // On error, send back error message
                res.send({num:0, err:"duplicate item"});
            }
        });
    });
}