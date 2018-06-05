const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const PORT = 3001;
app.use(morgan());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));
require('./routes.js')(app);
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});






















































