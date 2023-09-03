const mongoose = require('mongoose');

const excerciseSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    description :{
        type:String,
        required:true
    },
    duration :{
        type:Number,
        required:true
    },
    date :{
        type:Date,
        required:false
    }
},{
    timestamp:true
})

const Excercise = mongoose.model('Excercise',excerciseSchema);
module.exports=Excercise;