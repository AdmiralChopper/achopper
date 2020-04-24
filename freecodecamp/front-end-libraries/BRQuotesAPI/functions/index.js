const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const app = express();
const data = require('./data/quotes.json')
const randomizeArray = require('./utils/randomizeArray')

app.use(cors({ origin: true }));

app.get('/quotes', (req, res) => {
          return res.status(200).send(randomizeArray(data));

});

exports.app = functions.https.onRequest(app);