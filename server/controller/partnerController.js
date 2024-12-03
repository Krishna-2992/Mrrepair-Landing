const { Partner } = require('../model/partner'); // Assuming the model is stored in models folder


const createPartner = async (req, res) => {
    const { name, phone, email, address, city, pincode, profession, otherProfession, workExperience } = req.body;
    try {
        const contactNumber = phone;
        const experience = workExperience
        const newPartner = await Partner.create({ name, contactNumber, email, address, city, pincode, profession, otherProfession, experience });
        res.status(201).json(newPartner);
    } catch (error) {
        res.status(500).json({ message: 'Error creating partner', error });
    }
}

// Exporting the functions to use them in routes
module.exports = {
    createPartner
};
