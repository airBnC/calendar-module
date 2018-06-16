const Calendar = require('../dataBase/dataBaseLoader.js');
const mongoose = require('mongoose');
module.exports = function(app, mongoose) {
    app.post('/rooms', function(req, res) {
	    if(req.body.number >= 0 && req.body.number <= 99){
	            Calendar.Calendar.find({'_id': req.body.number}, function(err, year){
	    	        res.json(year);
	        })
	    };
    });
};


