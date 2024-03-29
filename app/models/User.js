"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
}, {
    timestamps: true,
});
var User = (0, mongoose_1.model)("User", userSchema, "users");
exports.default = User;
