const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    profilePhoto: { type: String },
    coverPhoto: { type: String },
    otherDetails: { type: Object }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
