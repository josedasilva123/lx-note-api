const { model } = require("mongoose");

const User = model("User", {
    name: String,
    password: String,
    email: String,
    createdAt: Date,
    updatedAt: Date,
}, 'users');

module.exports = User;