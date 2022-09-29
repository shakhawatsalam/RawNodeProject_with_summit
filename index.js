// dependencies

const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes.js');
const environments = require('./helpers/environments');

// app object - modulescaffolding
const app = {};




//create server 
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environments.port, () => {
        console.log(`listening to port number ${environments.port}`);

    });
};

// handle Request Response
app.handleReqRes = handleReqRes;

// start the server 
app.createServer();