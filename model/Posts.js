const mongoose = require('mongoose');


const Postschma = mongoose.Schema({
    title:{type: String, required: true},
    description:{type: String, required: true},
    data:{
        type: Date,
        default: Date.now,
    },
});


module.exports = mongoose.model('Posts', Postschma)