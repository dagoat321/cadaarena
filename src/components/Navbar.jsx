import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        {/* Brand Logo */}
        <Link to="/" className="brand" aria-label="CadaArena Homepage">
          <span className="brand-icon">CA</span>
          <span>
            CadaArena<span className="brand-dot">.</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="nav-links desktop-nav" aria-label="Main navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            About Us
          </NavLink>
          <a href="/#mission" className="nav-link">
            Mission
          </a>
          <a href="/#causes" className="nav-link">
            Causes
          </a>
          <a href="/#initiatives" className="nav-link">
            Initiatives
          </a>
          <NavLink
            to="/donate"
            className={({ isActive }) => (isActive ? "nav-link active donate-nav-link" : "nav-link donate-nav-link")}
          >
            Support &bull; Stripe
          </NavLink>
        </nav>

        {/* Desktop Call to Action */}
        <div className="nav-cta-wrapper desktop-nav">
          <Link to="/donate" className="nav-cta nav-donate-cta">
            Donate <span>💳</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className={`mobile-toggle ${isMobileMenuOpen ? "is-active" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu-drawer"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-drawer-backdrop ${isMobileMenuOpen ? "open" : ""}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer Panel */}
      <div
        id="mobile-menu-drawer"
        className={`mobile-drawer ${isMobileMenuOpen ? "open" : ""}`}
        aria-label="Mobile navigation"
      >
        <div className="mobile-drawer-header">
          <Link
            to="/"
            className="brand"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="brand-icon">CA</span>
            <span>
              CadaArena<span className="brand-dot">.</span>
            </span>
          </Link>
          <button
            type="button"
            className="mobile-close-btn"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="mobile-nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "mobile-link active" : "mobile-link"
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="link-number">01</span>
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "mobile-link active" : "mobile-link"
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="link-number">02</span>
            <span>About Us</span>
          </NavLink>
          <a
            href="/#mission"
            className="mobile-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="link-number">03</span>
            <span>Mission &amp; Vision</span>
          </a>
          <a
            href="/#causes"
            className="mobile-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="link-number">04</span>
            <span>Community Causes</span>
          </a>
          <a
            href="/#initiatives"
            className="mobile-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="link-number">05</span>
            <span>Programs &amp; Activities</span>
          </a>
          <NavLink
            to="/donate"
            className={({ isActive }) =>
              isActive ? "mobile-link active" : "mobile-link"
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="link-number">06</span>
            <span>Donate with Stripe 💳</span>
          </NavLink>
        </nav>

        <div className="mobile-drawer-footer">
          <p className="mobile-motto">PLAY WITH PURPOSE. GROW TOGETHER.</p>
          <Link
            to="/donate"
            className="button button-accent mobile-cta-btn"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Support Arena with Stripe <span>💳</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
