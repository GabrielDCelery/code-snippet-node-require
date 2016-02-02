require('./app_require'); // available everywhere

var User = appRequire('models/users');

console.log(User.name);




