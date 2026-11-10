import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-content-grid">
        {/* Column 1: Organization Identity & Mission */}
        <div className="footer-col footer-brand-col">
          <Link to="/" className="brand footer-brand" aria-label="CadaArena Homepage">
            <span className="brand-icon">CA</span>
            <span>
              CadaArena<span className="brand-dot">.</span>
            </span>
          </Link>
          <p className="footer-lead">
            A non-profit student initiative founded by <strong>Michaela Angela Libut</strong>,
            advocating for welcoming, toxicity-free gaming spaces, digital inclusion,
            and youth tech mentorship.
          </p>
          <div className="footer-badge">
            <span className="footer-badge-dot" />
            <span>NON-PROFIT &bull; FOUNDED BY MICHAELA LIBUT</span>
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="footer-col">
          <h4 className="footer-col-title">NAVIGATION</h4>
          <ul className="footer-links-list">
            <li>
              <Link to="/">Home Overview</Link>
            </li>
            <li>
              <Link to="/about">About Us (Founder Profile)</Link>
            </li>
            <li>
              <Link to="/donate">Stripe Donation Portal</Link>
            </li>
            <li>
              <a href="/#mission">Mission &amp; Vision</a>
            </li>
            <li>
              <a href="/#causes">Causes We Support</a>
            </li>
            <li>
              <a href="/#initiatives">Programs &amp; Activities</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Community & Advocacy */}
        <div className="footer-col">
          <h4 className="footer-col-title">ADVOCACY PILLARS</h4>
          <ul className="footer-links-list">
            <li>
              <span className="footer-static-item">✦ Toxicity-Free Play</span>
            </li>
            <li>
              <span className="footer-static-item">✦ Equal Device Access</span>
            </li>
            <li>
              <span className="footer-static-item">✦ Creative Youth Coding</span>
            </li>
            <li>
              <span className="footer-static-item">✦ Mental Wellness in Gaming</span>
            </li>
            <li>
              <span className="footer-static-item">✦ Inclusive Student Arenas</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Engagement */}
        <div className="footer-col">
          <h4 className="footer-col-title">COMMUNITY ACTION</h4>
          <p className="footer-contact-text">
            Support our youth programs and hardware drives via our secure Stripe integration:
          </p>
          <Link to="/donate" className="button button-accent footer-action-btn">
            Support with Stripe <span>💳</span>
          </Link>
          <p className="footer-note-sub">
            Integrative Programming &amp; Technologies (IPT) Web Capstone Project.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} CadaArena Initiative &bull; Created by Michaela Angela Libut.</p>
          <p className="footer-mono-quote">PLAY WITH PURPOSE. GROW TOGETHER.</p>
          <p className="footer-tagline">Integrated with @stripe/react-stripe-js &bull; React 19</p>
        </div>
      </div>
    </footer>
  );
}
