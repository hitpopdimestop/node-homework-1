/*
* Here we define routes and routes' handlers
*/

// Define handlers for routes
const handlers = {
    'hello': (data, callback) => {callback(200, {data: 'Hello World!'})},
    'ping': (data, callback) => {callback(200)},
    'notFound': (data, callback) => {callback(404)}
};

// Define a request router
const router = {
    'hello': handlers.hello,
    'ping': handlers.ping,
    '404': handlers.notFound
};

module.exports = {
    router,
    handlers
};