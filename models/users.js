var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: {
        type: String,
        required: true
    }
});

mongoose.model('Users', UserSchema);