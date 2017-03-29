/**
 * Created by domain on 2017/3/26.
 */
var express = require('express');
var admin = express();
var secret = require('./admin/secret');

admin.locals.demo = {
  title: 'admin',
  description: 'This is admin module!',
};

admin.locals.title = 'admin';
admin.locals.description = 'This is admin module!';

// admin.on('mount', function (parent) {
//   console.log('Admin Mounted');
//   console.log(admin.locals);
//   console.log(parent); // refers to the parent app
// });

/* GET home page. */
admin.get('/', function(req, res, next) {
  console.log(admin.mountpath); // [ '/adm*n', '/manager' ]
  res.render('admin', {mountpath: JSON.stringify(admin.mountpath)});
});

admin.use('/secr*t', secret); // load the 'secret' router on '/secr*t', on the 'admin' sub app

module.exports = admin;