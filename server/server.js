const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/rooms/:id',express.static(__dirname + '/../client/'));
require('./routes.js')(app);
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});






















































