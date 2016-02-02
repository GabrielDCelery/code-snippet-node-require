var express = require('express');

require('./app_require'); // available everywhere

var app = express();

console.log(appRequire('models/users'));

