import React from 'react';
import Navbar from "../components/Navbar";
import { CheckCircleIcon } from 'lucide-react';
import Footer from '../components/Footer';

export default function Success() {
    return (
        <div>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white flex flex-col">
            <div className="flex-grow flex items-center justify-center px-4 py-16">
                <div className="text-center max-w-2xl bg-white/20 backdrop-blur-md rounded-xl p-12 shadow-2xl">
                    <CheckCircleIcon className="mx-auto mb-6 text-green-400" size={80} />
                    <h1 className="text-4xl font-bold mb-6">Application Submitted Successfully</h1>
                    <p className="text-xl mb-8 leading-relaxed">
                        Thank you for partnering with us! Your application has been successfully saved to our database. 
                        We'll carefully review your details and contact you as soon as we begin our service.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a 
                            href="/" 
                            className="bg-white/30 hover:bg-white/40 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                            >
                            Return to Home
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}