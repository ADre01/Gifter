var mongoose = require('mongoose');
var Lists = mongoose.model('Lists');

module.exports.getList = function (req, res, next) {
    Lists.find({}).populate('user', '-password').exec(function (err, result) {
        res.send(result);
    });
}


module.exports.addToList = function (req, res, next) {
    req.body.user = req.user;
    
    var listItem = new Lists(req.body).
    save(function(err, result){
        if(err){
            console.log(err);
        }
        else{
            console.log(req.user);
            console.log(result);
        }
    });
    
}


module.exports.deleteItem = function (req, res, next) {
    Lists.findByIdAndRemove(req.params.id).then(function (result) {
        res.status(200);
    }).catch(function (err) {
        console.log(err);
    });
}


module.exports.getUserList = function (req, res, next) {
    Lists.findById(req.params.id).populate('user', '-password').exec(function (err, result) {
        if (!result) {
            console.log('List empty');
        } else if (err) {
            console.log(err);
        }
        res.send(result);
    });
}


module.exports.updateItem = function (req, res, next) {
    Lists.findById(req.params.id).select().then(function (item) {
        item.item_name = req.body.item_name;
        item.price = req.body.price;
        item.event = req.body.event;
        item.url = req.body.url;
        item.save(function (err, result) {
            if (err) {
                res.send(err);
            } else {
                console.log(result);
            }
        }).catch(function (err) {
            console.log(err);
        });
    });
}