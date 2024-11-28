import React, { useState } from 'react';
import {
    MapPin,
    Wrench,
    Hammer,
    Plug,
} from 'lucide-react';
export default function Header() {
    return (
        <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-4xl font-bold mb-4">Your Repair heroes are here</h1>
                <p className="text-xl mb-8">
                    Find reliable plumbers, electricians, carpenters, and more - instantly!
                </p>
                <div className="flex justify-center space-x-4">
                    <div className="bg-white p-2 rounded-full">
                        <Wrench className="text-blue-600" />
                    </div>
                    <div className="bg-white p-2 rounded-full">
                        <Plug className="text-yellow-500" />
                    </div>
                    <div className="bg-white p-2 rounded-full">
                        <Hammer className="text-red-500" />
                    </div>
                </div>
            </div>
        </header>
    )
}