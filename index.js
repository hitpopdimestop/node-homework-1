/*
* Primary file for API
 */

// Dependencies
const config = require('./config');
const httpServer = require('./server').httpServer;
const httpsServer = require('./server').httpsServer;


// Starting HTTP server
httpServer.listen(config.httpPort, () => {
    console.log(`The server is listening on port ${config.httpPort} in ${config.envName} environment`)
});

// Starting HTTPS server
httpsServer.listen(config.httpsPort, () => {
    console.log(`The server is listening on port ${config.httpsPort} in ${config.envName} environment`)
});