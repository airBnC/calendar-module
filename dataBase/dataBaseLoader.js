const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/airbnc');


let CalendarSchema = mongoose.Schema({
  _id: Number,
  year: String
});

let Calendar = mongoose.model('Calendar', CalendarSchema);

const db = mongoose.connection;

db.once('open', function(cb) {
	console.log('DataBase Connected');
});
var counter = 0;


function randomDataInserter(arr) {
	var anser = [];
	for (var i = 0; i < arr.length; i++) {
		arr[i].cost = Math.floor(Math.random() * 850) + 150;
		var tempArr = [];
		for (var j = 1; j < arr[i].day; j++) {
			var test = Math.floor(Math.random() * 10) + 1;
			if(test >= 5){
				tempArr.push(j);
			}
		}
		arr[i].daysOpen = tempArr;
		anser.push(arr[i])
	}
	var random = new Calendar({
		_id: counter,
		year: JSON.stringify(anser)
	})

	random.save(function(err) {
		if(err)	{
			console.log(err);
		} else {
			console.log('New Year Inserted');
		}

	})
	counter++;
}

var data = [
	{
		year: 18,
		cost: 357,
		month: 'January',
		beginning: 1,
		day: 31,
		daysOpen: [1, 2, 3, 6, 8, 12, 15, 22, 23, 24, 25, 28, 31]
	},
	{
		year: 18,
		cost: 300,
		month: 'Febuary',
		beginning: 4,
		day: 28,
		daysOpen: [1, 2, 3, 6, 8, 12, 15, 22, 23, 24, 25, 28, 31]
	},
	{
		year: 18,
		cost: 400,
		month: 'March',
		beginning: 4,
		day: 31,
		daysOpen: [1, 2, 3, 6, 8, 12, 15, 22, 23, 24, 25, 28, 31]
	},
	{
		year: 18,
		cost: 420,
		month: 'April',
		beginning: 0,
		day: 30,
		daysOpen: [1, 2, 3, 6, 8, 12, 15, 22, 23, 24, 25, 28, 31]
	},
	{
		year: 18,
		cost: 50,
		month: 'May',
		beginning: 2,
		day: 31,
		daysOpen: [1, 2, 3, 6, 8, 12, 15, 22, 23, 24, 25, 28, 31]
	},
	{
		year: 18,
		cost: 911,
		month: 'June',
		beginning: 5,
		day: 30,
		daysOpen: [1, , 3, 6, 8, 12, 15, 22, 23, 24, 25, 28, 31]
	},
	{
		year: 18,
		cost: 911,
		month: 'July',
		beginning: 0,
		day: 31,
		daysOpen: [1, 2, 3, 6, 8, 12, 15, 22, 23, 24, 25, 28, 31]
	},
	{
		year: 18,
		cost: 45,
		month: 'August',
		beginning: 3,
		day: 31,
		daysOpen: [1, 2, 3, 6, 8, 12, 15, 22, 23, 24, 25, 28, 31]
	},
	{
		year: 18,
		cost: 197,
		month: 'Sepember',
		beginning: 6,
		day: 30,
		daysOpen: [1, 2, 3, 6, 8, 12, 15, 22, 23, 24, 25, 28, 31]
	},
	{
		year: 18,
		cost: 388,
		month: 'October',
		beginning: 1,
		day: 31,
		daysOpen: [1, 2, 3, 6, 8, 12, 15, 22, 23, 24, 25, 28, 31]
	},
	{
		year: 18,
		cost: 37,
		month: 'November',
		beginning: 4,
		day: 30,
		daysOpen: [1, 2, 3, 6, 8, 12, 15, 22, 23, 24, 25, 28, 31]
	},
	{
		year: 18,
		cost: 357,
		month: 'December',
		beginning: 6,
		day: 31,
		daysOpen: [1, 2, 3, 6, 8, 12, 15, 22, 23, 24, 25, 28, 31]
	},
	
]

module.exports = {
	data: data,
	generator: randomDataInserter,
	Calendar: Calendar
}

