"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var noteSchema = new mongoose_1.Schema({
    userID: { type: String, required: true },
    title: { type: String, required: true },
    text: { type: String, required: true },
}, {
    timestamps: true,
});
var Note = (0, mongoose_1.model)("Note", noteSchema, 'notes');
exports.default = Note;
