module.exports = function () {

    return {
        method: 'GET',
        path: '/status',
        config: {
            handler: function (request, reply) {

                reply('ok');
            }
        }
    };
};
