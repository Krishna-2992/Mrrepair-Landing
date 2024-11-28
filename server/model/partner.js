const mongoose = require("mongoose");

const PartnerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contactNumber: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    profession: { type: String, required: true },
    other: { type: String },
    experience: { type: Number },
    createdAt: { type: Date, default: Date.now }
});

const Partner = mongoose.model('Partner', PartnerSchema);

module.exports = { Partner };