/**
 * Created by domain on 2017/3/26.
 */
var express = require('express');
var secret = express();

/* GET home page. */
secret.get('/', function(req, res, next) {
  console.log(router.mountpath); // /secr*t
  res.send('Admin Secret');
});

module.exports = secret;