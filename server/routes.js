module.exports = function(app, mongoose) {
  app.get('/calendar/:id/', function(req, res) {
    console.log('my id#', req.params.id);
  });
};


