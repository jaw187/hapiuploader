var Fs = require('fs');
var Joi = require('joi');
var Uuid = require('node-uuid');

var Filemanager = require('./filemanager')

var internals = {};

internals.upload = function (request, reply) {

    var self = this;

    var id = Uuid.v4();
    var path = internals.directories.staging.replace(/\/$/,'') + '/' + id + '.txt';

    var data = request.payload.data;

    Filemanager.write(path, data, function (err) {

        if (err) {
            console.log(':: ERR ::', err)
        }

        reply('Got it...');
    });
};

internals.schema = {
    payload: {
        data: Joi.string()
    }
};

internals.registerDirectories = function (directories) {

    internals.directories = directories;
}

module.exports = function (directories) {

    internals.registerDirectories(directories);

    return {
        method: 'POST',
        path: '/upload',
        config: {
            description: 'Upload files to server',
            handler: internals.upload,
            validate: internals.schema
        }
    };
};
