import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Donate from "./pages/Donate";

export default function App() {
  return (
    <div className="app-layout">
      {/* WCAG Skip Link for keyboard navigation */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Reusable Header Navbar */}
      <Navbar />

      {/* Auto Scroll Reset */}
      <ScrollToTop />

      {/* Main Routed Page Content */}
      <main id="main-content" tabIndex="-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </main>

      {/* Reusable Shared Footer */}
      <Footer />
    </div>
  );
}
