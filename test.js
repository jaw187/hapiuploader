var Request = require('request');
var Uploadserver = require('./');

var server = Uploadserver();

server.start(function () {

    console.log('Server started ...')

    var data = 'Test\nASDF';

    var options = {
        method: 'POST',
        url: 'http://localhost:10700/upload',
        body: {
            data: data
        },
        json: true
    }

    Request(options, function (err, response, body) {

        //console.log(':: REQUEST ::',err, response, body)
    })
});
