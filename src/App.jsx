import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Offers from "./pages/Offers.jsx";
import Restaurants from "./pages/Restaurants.jsx";
import TrackOrder from "./pages/TrackOrder.jsx";
import Auth from "./pages/Auth.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
