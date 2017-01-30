var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/gifter';
mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
    console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('disconnected', function(){
    console.log('Mongoosed disconnected');
});

mongoose.connection.on('error', function(){
    console.log('There was an error' + err);
});

require('./users');
require('./lists');