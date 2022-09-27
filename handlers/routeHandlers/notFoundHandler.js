
//   Title: Not found handler
//   Description: 404 Not Found Handler
//   Author: shawon (practiceing node.js)
//   Date: 27/09/2022

//module scaffolding

const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {

    callback(404, {
        message: 'Your requested URL is not found',
    });
    
};


module.exports = handler;