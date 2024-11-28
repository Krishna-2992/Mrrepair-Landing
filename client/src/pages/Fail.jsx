import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import { XCircleIcon } from 'lucide-react';

export default function Failure() {
    return (
        <div>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-r from-rose-400 to-pink-500 text-white flex flex-col">
            <div className="flex-grow flex items-center justify-center px-4 py-16">
                <div className="text-center max-w-2xl bg-white/10 backdrop-blur-md rounded-xl p-12 shadow-2xl">
                    <XCircleIcon className="mx-auto mb-6 text-rose-300" size={80} />
                    <h1 className="text-4xl font-bold mb-6">Application Submission Issue</h1>
                    <p className="text-xl mb-8 leading-relaxed">
                        We apologize, but there was an issue submitting your application. 
                        Please check your information and try again. If the problem persists, 
                        contact our support team for assistance.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a 
                            href="/" 
                            className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 mr-4"
                            >
                            Return to Home
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    )
}