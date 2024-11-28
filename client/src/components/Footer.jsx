import React, { useState } from 'react';
import {
    MapPin,
    Wrench,
    Hammer,
    Plug,
    Phone,
    Mail,
    User,
    Building
} from 'lucide-react';
export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                <div className="flex flex-col space-y-4">
                    <h3 className="text-xl font-bold">ServiceConnect</h3>
                    <p className="text-gray-400">
                        Connecting you with trusted local service providers
                    </p>
                    <div className="flex space-x-4">
                        <Phone className="text-green-500" />
                        <span>+91 7415271225</span>
                    </div>
                </div>
                <div className="flex justify-center space-x-4">
                    <div className="animate-bounce p-3 bg-blue-600 rounded-full">
                        <Wrench className="text-white" />
                    </div>
                    <div className="animate-bounce p-3 bg-yellow-500 rounded-full">
                        <Plug className="text-white" />
                    </div>
                    <div className="animate-bounce p-3 bg-red-500 rounded-full">
                        <Hammer className="text-white" />
                    </div>
                </div>
                <div className="text-right">
                    <p>&copy; 2024 ServiceConnect. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}