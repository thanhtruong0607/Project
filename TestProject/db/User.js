const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username : {type: String, require},
    password : {type: String, require}
});

module.exports = mongoose.model("users", userSchema);