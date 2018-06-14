// populate the DATABASE WITH 100  DIFFERENT YEARS IT SHOULD RUN WHEN YOU TYPE DEPLOY IN NPM
const mongoose = require('mongoose');
const generator = require('./dataBase/dataBaseLoader.js');
generator.randomDataInserter(generator.data);
