var mongoose = require('mongoose');
var Users = mongoose.model('Users');
var jwt = require('jwt-simple');
var moment = require('moment');

module.exports = {
    register: function (req, res) {
        Users.findOne({
            email: req.body.email
        }, function (err, existingUser) {
            if (existingUser) {
                return res.status(409).send({
                    message: 'Email is already in use'
                });
            }
            
            var user = new Users(req.body);
            user.save(function (err, result) {
                if (err) {
                    return res.status(500).send({
                        message: err.message
                    });
                }
                res.status(200).send({token: createToken(result)});
            });

        });
    },


    login: function (req, res) {
        Users.findOne({email: req.body.email}, function(err, user){
            if(!user){
                return res.status(401).send({message: 'Invalid Email or Password'});
            }
            if(req.body.password == user.password){
                console.log(req.body, req.password);
                res.send({token: createToken(user)});
            }else{
                return res.status(401).send({message: 'Invalid Password'});
            }
        });
    }
}


//Creates User Token
function createToken(user) {
    var payload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix()
    };
    return jwt.encode(payload, 'secret');
}