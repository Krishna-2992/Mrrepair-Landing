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
export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md px-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    {/* <img src="/logo.jpeg" alt="Logo" className='h-12' /> */}
                    <div className='text-3xl font-bold'>Mr. Repairr</div>
                </div>
                <div className="flex items-center space-x-2 text-gray-700 p-4">
                    <Phone className="text-green-500" />
                    <span>+91 7415271225</span>
                </div>
            </div>
        </nav>
    )
}