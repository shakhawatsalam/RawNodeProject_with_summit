// dependencies

const http = require('http');

const { handleReqRes } = require('./helpers/handleReqRes.js');

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
app.handleReqRes = handleReqRes;

// start the server 
app.createServer();