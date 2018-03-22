/* eslint-disable */
var path = require('path');
var express = require('express');
var request = require('request');

var app = express();
app.get('/', function (req, res) {
  const page = req.query.page || 1;

  //cors
  res.setHeader('X-Frame-Options', 'ALLOWALL');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  request({
    url: `https://sellics-frontend-test.herokuapp.com/reviews/${page}`,
    method: 'get'
  }, (error, response, body) => {
    res.send(body);
  });
});

app.listen(3333, () => console.log('App READY and Running on 0.0.0.0:3333'));
