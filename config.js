/*
* Create and export configuration variables
*/

// Container for environments
const environments = {
    staging: {
        'httpPort': 3000,
        'httpsPort': 3001,
        'envName': 'staging'
    },
    production: {
        'httpPort': 5000,
        'httpsPort': 5001,
        'envName': 'production'
    }
};

const currentEnvironment = typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV.toLowerCase() : 'staging';

const environmentToExport = environments[currentEnvironment] ? environments[currentEnvironment] : environments.staging;

module.exports = environmentToExport;