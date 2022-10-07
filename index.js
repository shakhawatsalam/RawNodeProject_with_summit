// dependencies

const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes.js');
const environments = require('./helpers/environments');
const data = require('./lib/data');

// app object - modulescaffolding
const app = {};


// testing file system
// @todo: Pore muche dibo
// data.delete('test', 'newFile', (err) => {
//     console.log(err);
// });

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