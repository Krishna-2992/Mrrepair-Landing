import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import RegistrationForm from "../components/RegistrationForm";
import Header2 from "../components/Header2";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Header2 />
      <RegistrationForm />
      <Footer />
    </div>
  )
}

