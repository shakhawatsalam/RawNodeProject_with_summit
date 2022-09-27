// dependencies

const http = require('http');
const url = require('url');
const { StringDecoder } = require('string_decoder');

// app object - modulescaffolding
const app = {};


//configuration
app.config = {
    port: 3000
};

//create server 
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listening to port number ${app.config.port}`);

    });
};

// handle Request Response
app.handleReqRes = (req, res) => {
    // request handling
    // get the url and parse it 
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const hadersObject = req.headers;

    const decoder = new StringDecoder('utf-8');
    req.on('data', (buffer) => {

    });



    console.log(hadersObject.title);

    res.end("hello world")
};

// start the server 
app.createServer();