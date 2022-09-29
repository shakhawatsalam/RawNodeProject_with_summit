//   Title: Environments
//   Description: Handle all environment related things
//   Author: shawon (practiceing node.js)
//   Date: 29/09/2022


//dependencies

//module scaffolding
const environments = {};

//staging environment 
environments.staging = {
    port: 3000,
    envName: 'staging'
};

//production environment
environments.production = {
    port: 5000,
    envName: 'production'
};

// determine which environment was passed
const currentEnvironment =
    typeof process.env.NODE_ENV === "string" ? process.env.NODE_ENV : 'staging';

// export corresponging environment object
const environmentToExport = typeof environments[currentEnvironment] === 'object' ? environments[currentEnvironment] : environments.staging;


// export module
module.exports = environmentToExport;