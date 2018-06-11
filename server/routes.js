const Calendar = require('../dataBase/dataBaseLoader.js');
const mongoose = require('mongoose');
module.exports = function(app, mongoose) {
  app.get('/calendar/:id/', function(req, res) {
    Calendar.Calendar.find({'_id': req.params.id}, function(err, year){
    	res.json(year);
    })
  });
};


