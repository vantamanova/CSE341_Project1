const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API for contacts',
    version: '1.0.0'
  },
  host: 'localhost:3000',
  schemes: ['http'],
  paths: {}
};
const outputFile = './swagger-output.json';
const endpointsFiles = ['./server.js'];


swaggerAutogen(outputFile, endpointsFiles, doc); 