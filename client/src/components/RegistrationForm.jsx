import React, { useState } from 'react';
import {
    MapPin,
    Phone,
    Mail,
    User,
    Building,
    Briefcase,
    Loader2
} from 'lucide-react';
import axios from "axios"
import { useNavigate } from "react-router-dom";

// Translations
const translations = {
    english: {
        title: 'Join Our Network',
        name: 'Full Name',
        phone: 'Phone Number',
        email: 'Email Address',
        address: 'Address',
        city: 'City',
        pincode: 'Pincode',
        profession: 'Select Profession',
        workExperience: 'Work Experience (Years)',
        registerButton: 'Register Now',
        professionOptions: {
            plumber: 'Plumber',
            electrician: 'Electrician',
            carpenter: 'Carpenter',
            painter: 'Painter',
            gas_repair: 'Gas Stove Repairing (LPG Gas Burner)',
            ac_tech: 'AC / Cooler Technician',
            microwave_tech: 'Microwave Oven / Electric Chimney Technician',
            shutter_welder: 'Rolling Shutter Repair / IRON Welder',
            water_dispenser_tech: 'RO Water / Water Cooler Dispenser Technician',
            invertor_tech: 'Invertor / Battery Technician',
            aata_chakki_repair: 'Aata Chakki Repair',
            weighing_machine_tech: 'Electronic Weighing Machine Technician',
            tv_tech: 'T.V. / LED Technician',
            computer_tech: 'Laptop / Desktop Computer Technician',
            printer_tech: 'Printer / Scanner Technician',
            appliance_tech: 'Washing Machine / Fridge Technician',
            geyser_tech: 'Water Geyser Technician',
            mobile_tablet_repair: 'Mobile / Tablet Repair',
            gadgets_repair: 'Smart Gadgets Repair',
            cctv_tech: 'CCTV Camera Technician',
            other: 'Other'
        },
        otherProfessionPlaceholder: 'Please specify your profession',
        validations: {
            phoneError: 'Please enter a valid 10-digit phone number',
            emailError: 'Please enter a valid email address(example@gmail.com)',
            pincodeError: 'Please enter a valid 6-digit pincode'
        }
    },
    hindi: {
        title: 'हमारे नेटवर्क में शामिल हों',
        name: 'पूरा नाम',
        phone: 'फोन नंबर',
        email: 'ईमेल पता',
        address: 'पता',
        city: 'शहर',
        pincode: 'पिनकोड',
        profession: 'पेशा चुनें',
        workExperience: 'कार्य अनुभव (वर्ष)',
        registerButton: 'अभी रजिस्टर करें',
        professionOptions: {
            plumber: 'प्लंबर',
            electrician: 'इलेक्ट्रीशियन',
            carpenter: 'बढ़ई',
            painter: 'रंगाई',
            gas_repair: 'गैस मरम्मत',
            ac_tech: 'एसी तकनीशियन',
            microwave_tech: 'माइक्रोवेव ओवन / इलेक्ट्रिक चिमनी तकनीशियन',
            shutter_welder: 'रोलिंग शटर मरम्मत / आयरन वेल्डर',
            water_dispenser_tech: 'आरओ पानी / वाटर कूलर डिस्पेंसर तकनीशियन',
            invertor_tech: 'इन्वर्टर / बैटरी तकनीशियन',
            aata_chakki_repair: 'आटा चक्की मरम्मत',
            weighing_machine_tech: 'इलेक्ट्रॉनिक वजन मशीन तकनीशियन',
            tv_tech: 'टी.वी. / एलईडी तकनीशियन',
            computer_tech: 'लैपटॉप / डेस्कटॉप कंप्यूटर तकनीशियन',
            printer_tech: 'प्रिंटर / स्कैनर तकनीशियन',
            appliance_tech: 'वॉशिंग मशीन / फ्रिज तकनीशियन',
            geyser_tech: 'वॉटर गीजर तकनीशियन',
            mobile_tablet_repair: 'मोबाइल / टैबलेट मरम्मत',
            gadgets_repair: 'स्मार्ट गैजेट मरम्मत',
            cctv_tech: 'सीसीटीवी कैमरा तकनीशियन',
            other: 'अन्य'
        },
        otherProfessionPlaceholder: 'कृपया अपना पेशा बताएं',
        validations: {
            phoneError: 'कृपया एक मान्य 10 अंकों का फोन नंबर दर्ज करें',
            emailError: 'कृपया एक मान्य ईमेल पता दर्ज करें',
            pincodeError: 'कृपया एक मान्य 6 अंकीय पिनकोड दर्ज करें'
        }
    }
};

export default function RegistrationForm() {
    const [language, setLanguage] = useState('english');
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        pincode: '',
        profession: '',
        otherProfession: '',
        workExperience: ''
    });
    const [validationErrors, setValidationErrors] = useState({
        phone: '',
        email: '',
        pincode: ''
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let processedValue = value;

        // Special handling for phone number
        if (name === 'phone') {
            // Remove any non-digit characters
            processedValue = value.replace(/\D/g, '').slice(0, 10);
        }

        // Special handling for work experience
        if (name === 'workExperience') {
            // Remove any non-digit characters
            processedValue = value.replace(/\D/g, '').slice(0, 2);
        }

        // Special handling for pincode
        if (name === 'pincode') {
            // Remove any non-digit characters
            processedValue = value.replace(/\D/g, '').slice(0, 6);
        }

        setFormData(prev => ({
            ...prev,
            [name]: processedValue
        }));

        // Clear validation errors when user starts typing
        if (name === 'phone' || name === 'email' || name === 'pincode') {
            setValidationErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const errors = {};
        const t = translations[language];

        // Phone number validation
        const phoneRegex = /^[6-9]\d{9}$/;
        if (formData.phone.length !== 10) {
            errors.phone = t.validations.phoneError;
        } else if (!phoneRegex.test(formData.phone)) {
            errors.phone = t.validations.phoneError;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            errors.email = t.validations.emailError;
        }

        // Pincode validation
        const pincodeRegex = /^\d{6}$/;
        if (!pincodeRegex.test(formData.pincode)) {
            errors.pincode = t.validations.pincodeError;
        }

        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form before submission
        if (!validateForm()) {
            return;
        }

        // Set loading state to true
        setIsLoading(true);

        try {
            const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/partners`, formData);
            if (response.status === 201) {
                // Reset form after successful submission
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    address: '',
                    city: '',
                    pincode: '',
                    profession: '',
                    otherProfession: '',
                    workExperience: ''
                });
                navigate('/success')
            }
        } catch (error) {
            console.error('Error creating partner:', error);
            navigate('/fail')
        } finally {
            // Set loading state back to false
            setIsLoading(false);
        }
    };

    const t = translations[language];

    return (
        <section className="container mx-auto px-4 py-12">
            <div className="max-w-lg mx-auto bg-white shadow-xl rounded-lg p-8">
                {/* Language Switcher */}
                <div className="flex justify-end mb-4">
                    <div className="flex items-center bg-gray-100 rounded-full p-1">
                        <button
                            onClick={() => handleLanguageChange('english')}
                            className={`px-3 py-1 rounded-full transition-colors ${language === 'english'
                                ? 'bg-blue-600 text-white'
                                : 'text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            English
                        </button>
                        <button
                            onClick={() => handleLanguageChange('hindi')}
                            className={`px-3 py-1 rounded-full transition-colors ${language === 'hindi'
                                ? 'bg-blue-600 text-white'
                                : 'text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            हिन्दी
                        </button>
                    </div>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    {t.title}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex items-center border rounded-lg">
                        <User className="ml-3 text-gray-500" />
                        <input
                            type="text"
                            name="name"
                            placeholder={t.name}
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full p-3 rounded-lg focus:outline-none"
                        />
                    </div>
                    <div>
                        <div className="flex items-center border rounded-lg">
                            <Phone className="ml-3 text-gray-500" />
                            <input
                                type="tel"
                                name="phone"
                                placeholder={t.phone}
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                                className={`w-full p-3 rounded-lg focus:outline-none ${validationErrors.phone ? 'border-red-500' : ''}`}
                            />
                        </div>
                        {validationErrors.phone && (
                            <p className="text-red-500 text-sm mt-1">{validationErrors.phone}</p>
                        )}
                    </div>
                    <div>
                        <div className="flex items-center border rounded-lg">
                            <Mail className="ml-3 text-gray-500" />
                            <input
                                type="email"
                                name="email"
                                placeholder={t.email}
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className={`w-full p-3 rounded-lg focus:outline-none ${validationErrors.email ? 'border-red-500' : ''}`}
                            />
                        </div>
                        {validationErrors.email && (
                            <p className="text-red-500 text-sm mt-1">{validationErrors.email}</p>
                        )}
                    </div>
                    <div className="flex items-center border rounded-lg">
                        <MapPin className="ml-3 text-gray-500" />
                        <input
                            type="text"
                            name="address"
                            placeholder={t.address}
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                            className="w-full p-3 rounded-lg focus:outline-none"
                        />
                    </div>
                    <div className="flex items-center border rounded-lg">
                        <MapPin className="ml-3 text-gray-500" />
                        <input
                            type="text"
                            name="city"
                            placeholder={t.city}
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                            className="w-full p-3 rounded-lg focus:outline-none"
                        />
                    </div>
                    <div className="flex items-center border rounded-lg">
                        <MapPin className="ml-3 text-gray-500" />
                        <input
                            type="text"
                            name="pincode"
                            placeholder={t.pincode}
                            value={formData.pincode}
                            onChange={handleInputChange}
                            required
                            className="w-full p-3 rounded-lg focus:outline-none"
                        />
                    </div>
                    <div className="flex items-center border rounded-lg">
                        <Building className="ml-3 text-gray-500" />
                        <select
                            name="profession"
                            value={formData.profession}
                            onChange={handleInputChange}
                            required
                            className="w-full p-3 rounded-lg focus:outline-none text-gray-700"
                        >
                            <option value="">{t.profession}</option>
                            <option value="plumber">{t.professionOptions.plumber}</option>
                            <option value="electrician">{t.professionOptions.electrician}</option>
                            <option value="carpenter">{t.professionOptions.carpenter}</option>
                            <option value="painter">{t.professionOptions.painter}</option>
                            <option value="gas_repair">{t.professionOptions.gas_repair}</option>
                            <option value="ac_tech">{t.professionOptions.ac_tech}</option>
                            <option value="microwave_tech">{t.professionOptions.microwave_tech}</option>
                            <option value="shutter_welder">{t.professionOptions.shutter_welder}</option>
                            <option value="water_dispenser_tech">{t.professionOptions.water_dispenser_tech}</option>
                            <option value="invertor_tech">{t.professionOptions.invertor_tech}</option>
                            <option value="aata_chakki_repair">{t.professionOptions.aata_chakki_repair}</option>
                            <option value="weighing_machine_tech">{t.professionOptions.weighing_machine_tech}</option>
                            <option value="tv_tech">{t.professionOptions.tv_tech}</option>
                            <option value="computer_tech">{t.professionOptions.computer_tech}</option>
                            <option value="printer_tech">{t.professionOptions.printer_tech}</option>
                            <option value="appliance_tech">{t.professionOptions.appliance_tech}</option>
                            <option value="geyser_tech">{t.professionOptions.geyser_tech}</option>
                            <option value="mobile_tablet_repair">{t.professionOptions.mobile_tablet_repair}</option>
                            <option value="gadgets_repair">{t.professionOptions.gadgets_repair}</option>
                            <option value="cctv_tech">{t.professionOptions.cctv_tech}</option>
                            <option value="other">{t.professionOptions.other}</option>
                        </select>
                    </div>
                    {formData.profession === 'other' && (
                        <div className="flex items-center border rounded-lg">
                            <User className="ml-3 text-gray-500" />
                            <input
                                type="text"
                                name="otherProfession"
                                placeholder={t.otherProfessionPlaceholder}
                                value={formData.otherProfession}
                                onChange={handleInputChange}
                                required
                                className="w-full p-3 rounded-lg focus:outline-none"
                            />
                        </div>
                    )}
                    <div className="flex items-center border rounded-lg">
                        <Briefcase className="ml-3 text-gray-500" />
                        <input
                            type="number"
                            name="workExperience"
                            placeholder={t.workExperience}
                            value={formData.workExperience}
                            onChange={handleInputChange}
                            min="0"
                            max="50"
                            required
                            className="w-full p-3 rounded-lg focus:outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full p-3 rounded-lg transition duration-300 ${isLoading
                            ? 'bg-blue-400 cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                    >
                        {isLoading ? (
                            <div className="flex items-center justify-center">
                                <Loader2 className="mr-2 animate-spin" />
                                {t.registerButton}...
                            </div>
                        ) : (
                            t.registerButton
                        )}
                    </button>
                </form>
            </div>
        </section>
    )
}