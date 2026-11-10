import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripeDonationForm from "../components/StripeDonationForm";
import SectionHeading from "../components/SectionHeading";

// Initialize official Stripe client with public test key
const stripePromise = loadStripe(
  "pk_test_51BTUDG2eZvVNNpBR0qHGkkUmRoll4651GlUVKiK95OozaAO8stVsHSphMTmPtUmJ9cAOst2hmRIgsWtUDeO100ujBQ581a"
);

export default function Donate() {
  return (
    <div className="donate-page">
      {/* DONATE HERO */}
      <section className="donate-hero" aria-labelledby="donate-heading">
        <div className="container">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            COMMUNITY PHILANTHROPY // STRIPE SECURE GATEWAY (PHP)
          </p>

          <h1 id="donate-heading">
            INVEST IN PURPOSEFUL PLAY.
            <br />
            EMPOWER <span className="text-teal">STUDENT CREATORS.</span>
          </h1>

          <p className="donate-intro">
            CadaArena operates as an open-access non-profit initiative founded
            by <strong>Michaela Angela Libut</strong>. Contributions directly fund
            community hardware acquisition drives, free youth coding workshops,
            and respectful multiplayer environments across our student chapters.
          </p>
        </div>
      </section>

      {/* DONATION CONTENT GRID */}
      <section className="donate-main-section section-pad">
        <div className="container donate-grid">
          {/* Left Column: Fiscal Allocation & Impact */}
          <div className="donate-info-col">
            <SectionHeading
              number="01"
              numberLabel="FISCAL TRANSPARENCY"
              eyebrow="RESOURCE ALLOCATION FRAMEWORK"
              title="Measurable community dividends."
              accentText="Zero commercial overhead."
              accentColor="amber"
              subtitle="Every peso contributed is tracked and allocated toward student digital empowerment programs."
            />

            <div className="impact-cards-list">
              <div className="impact-item">
                <div className="impact-icon-badge">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <div>
                  <h4>Student Hardware &amp; Peripheral Drives</h4>
                  <p>
                    Procuring, refurbishing, and distributing controllers, mechanical
                    switches, and low-spec gaming PCs to underprivileged students across
                    partner schools.
                  </p>
                  <span className="allocation-tag">50% OF ANNUAL ALLOCATION</span>
                </div>
              </div>

              <div className="impact-item">
                <div className="impact-icon-badge">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <div>
                  <h4>Youth Coding &amp; Game Development Clinics</h4>
                  <p>
                    Hosting curriculum-backed game design workshops, logic puzzles,
                    and collaborative hackathons utilizing open-source engines and web tools.
                  </p>
                  <span className="allocation-tag">30% OF ANNUAL ALLOCATION</span>
                </div>
              </div>

              <div className="impact-item">
                <div className="impact-icon-badge">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <h4>Positive Server Moderation &amp; Safe Havens</h4>
                  <p>
                    Maintaining dedicated private servers, positive-play community bots,
                    and active peer counseling for youth facing online cyberbullying.
                  </p>
                  <span className="allocation-tag">20% OF ANNUAL ALLOCATION</span>
                </div>
              </div>
            </div>

            <div className="founder-pledge-card">
              <div className="pledge-quote">
                "Our guiding charter ensures CadaArena remains completely public and
                accessible. We believe that financial constraints must never prevent a
                young person from discovering their potential in digital technology."
              </div>
              <div className="pledge-author">
                — <strong>Michaela Angela Libut</strong>, Founder &amp; Product Designer
              </div>
            </div>
          </div>

          {/* Right Column: Stripe Interactive Payment Form */}
          <div className="donate-form-col">
            <div className="stripe-form-card">
              <div className="stripe-card-header">
                <div>
                  <span className="header-eyebrow-mini">OFFICIAL PAYMENT GATEWAY</span>
                  <h3>Contribute in Philippine Pesos</h3>
                </div>
                <span className="stripe-ssl-badge">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  256-Bit SSL Encrypted
                </span>
              </div>

              {/* Stripe Elements Provider */}
              <Elements stripe={stripePromise}>
                <StripeDonationForm />
              </Elements>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
