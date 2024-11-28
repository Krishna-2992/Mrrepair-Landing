import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import RegistrationForm from "../components/RegistrationForm";

export default function Landing() {
    return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Header />
      <RegistrationForm />
      <Footer />
    </div> 
    )
}

