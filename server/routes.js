module.exports = function(app, mongoose) {
  app.get('/', function(req, res) {
    console.log('ready');
  });
};