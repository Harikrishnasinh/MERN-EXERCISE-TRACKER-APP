const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique:true,
        trim:true,
        minlength:3
    },
},
{
    tiemstamp:true,
});
const User = mongoose.model('User',userSchema);
module.exports=User;