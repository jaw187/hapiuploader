var Hapi = require('hapi');
var Joi = require('joi');
var Hoek = require('hoek');

var upload = require('./upload');
var status = require('./status');

module.exports = function (options) {

    var self = this;

    var defaults = {
        host: 'localhost',
        port : 10700,
        hapiOptions: {},
        directories: {
            staging: './files'
        }
    };

    var config = Hoek.applyToDefaults(defaults, options) || defaults;

    var server = new Hapi.Server(config.host, config.port, config.hapiOptions);

    server.route([
        upload(config.directories),
        status()
    ]);

    return server;
};
