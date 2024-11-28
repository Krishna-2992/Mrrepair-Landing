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
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Header from './components/Header';


function App() {




  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Header />
      <RegistrationForm />
      <Footer />
    </div>
  );
}

export default App

