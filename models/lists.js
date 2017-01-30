var mongoose = require('mongoose')
, Schema = mongoose.Schema


var ListSchema = new mongoose.Schema({
    item_name: String,
    price: Number,
    event: String,
    url: String,
    user: {
        type:  Schema.Types.ObjectId, ref: 'Users'
    }
});


mongoose.model('Lists', ListSchema);