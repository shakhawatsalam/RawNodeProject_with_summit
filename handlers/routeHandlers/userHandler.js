// title : User Handler
// description : Handler to handle user related routs
// Author: Shawon
// date: 10/10/2022


//module scaffolding

const handler = {};

handler.userHandler = (requestProperties, callback) => {
    const acceptedMethods = ['get', 'post', 'put', 'delete'];
    if (acceptedMethods.indexOf(requestProperties.method) > -1) {
        
    } else {
        callback(405);
    }
    
};


module.exports = handler;