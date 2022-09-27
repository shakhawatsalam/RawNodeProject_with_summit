
//   Title: Handle Request Response
//   Description: Handle Resquest and response
//   Author: shawon (practiceing node.js)
//   Date: 27/09/2022

//dependencies 
const url = require('url');
const { StringDecoder } = require('string_decoder');
//module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
    // request handling
    // get the url and parse it 
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const hadersObject = req.headers;

    const decoder = new StringDecoder('utf-8');
    let realData = '';
    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);
        // response handle
        res.end("hello world");
    });

};


module.exports = handler;