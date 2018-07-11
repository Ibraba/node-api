const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create book Schema & model
// create instance of Schema
const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email is required!"]
    },
    password:{
        type: String,
        required: [true, "Password is required!"]
    }
});

// create model if not exists.
const User = mongoose.model('user',UserSchema);

module.exports = User;
