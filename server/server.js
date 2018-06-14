const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;
const generator = require('../dataBase/dataBaseLoader.js');
// populate the DATABASE WITH 100  DIFFERENT YEARS
// for (var i = 0; i <= 99; i++) {
	// generator.generator(generator.data);
// }
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/rooms/:id',express.static(__dirname + '/../client/dist/'));
require('./routes.js')(app);
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});






















































