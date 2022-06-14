const { ObjectId } = require('mongodb');
const { model } = require('mongoose');

const Note = model("Note", {
    userID: String,
    title: String,    
    text: String,
    createdAt: Date,
    updatedAt: Date,
}, 'notes')

module.exports = Note;