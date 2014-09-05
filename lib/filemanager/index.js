var Fs = require('fs');

module.exports.write = function (path, data, next) {

    Fs.writeFile(path, data, next);
};
