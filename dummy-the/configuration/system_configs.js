/**
 * Created by dummy team
 * 2017-09-01
 */

require('../poem/configuration/constants');
var Enums = require('../constants/enums');
var enums = new Enums();

exports.setupEnvironment = function () {
    var env = process.env.NODE_ENV || 'development';
    ENV = env;
    if (undefined === typeof env || null === env || "" === env || enums.APP_DEVELOPMENT_MODE === env) {
        LISTEN_PORT = "8090";
        APP_SERVER_ADDRESS = "127.0.0.1";
        APP_SERVER_PORT = "8888";
    } else if (enums.APP_PRODUCTION_MODE === env) {
        LISTEN_PORT = "8090";
        APP_SERVER_ADDRESS = "127.0.0.1";
        APP_SERVER_PORT = "8888";
    } else if (enums.APP_USERDEBUG_MODE === env) {
        LISTEN_PORT = "8090";
        APP_SERVER_ADDRESS = "127.0.0.1";
        APP_SERVER_PORT = "8888";
    }
};
