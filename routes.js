// title : routes
// description : Application Routes
// Author: Shawon
// date: 27/09/2022


// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler')
const routes = {
    'sample': sampleHandler,
};

module.exports = routes;