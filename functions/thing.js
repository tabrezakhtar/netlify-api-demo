// const serverlessExpress = require('@vendia/serverless-express');
// const app = require('../app.js');

// exports.handler = serverlessExpress({ app });

const express = require('express');
const serverlessExpress = require('@codegenie/serverless-express');

const app = express();
app.get('/api', (req, res) => res.send('Hello World!'));

exports.handler = serverlessExpress({ app });