// title : routes
// description : Application Routes
// Author: Shawon
// date: 27/09/2022


// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');
const { userHandler } = require('./handlers/routeHandlers/userHandler');
const routes = {
    sample: sampleHandler,
    user: userHandler
};

module.exports = routes;