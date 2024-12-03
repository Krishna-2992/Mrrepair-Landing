const mongoose = require("mongoose");

const PartnerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contactNumber: { type: String, required: true },
    email: { type: String },
    address: { type: String, required: true },
    city: { type: String, required: true },
    pincode: { type: String, required: true },
    profession: { type: String, required: true },
    otherProfession: { type: String },
    experience: { type: Number },
    createdAt: { type: Date, default: Date.now }
});

const Partner = mongoose.model('Partner', PartnerSchema);

module.exports = { Partner };