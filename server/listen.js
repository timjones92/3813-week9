module.exports = {
    listen: function(app){
        app.listen(3000, () => {
            let d = new Date();
            let h = d.getHours();
            let m = d.getMinutes();
            console.log('Server has been started on port 3000 at ', + h + ':' + m);
        });
    }
}