var path = require('path');

module.exports = function() {
	global.appRequire = function(name) {
		return (path.join(__dirname, name));
	};
}();