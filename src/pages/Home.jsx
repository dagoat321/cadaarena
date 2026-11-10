import { Link } from "react-router-dom";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import ProgramCard from "../components/ProgramCard";
import CauseCard from "../components/CauseCard";
import communityGamingImg from "../assets/community-gaming.svg";
import digitalInclusionImg from "../assets/digital-inclusion.svg";

export default function Home() {
  return (
    <>
      {/* ========================================================
          HERO SECTION
          ======================================================== */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              NON-PROFIT DIGITAL COMMUNITY INITIATIVE &bull; EST. 2026
            </p>

            <h1 id="hero-heading">
              GAMING IS
              <br />
              BETTER <span className="text-teal">TOGETHER.</span>
            </h1>

            <p className="hero-description">
              Welcome to <strong>CadaArena</strong> — an open-access non-profit
              initiative founded by <strong>Michaela Angela Libut</strong>,
              dedicated to advancing inclusive gaming environments, digital
              hardware equity, and youth technology mentorship.
            </p>

            <div className="hero-actions">
              <Button href="#mission" variant="accent">
                Explore the Framework <span>↓</span>
              </Button>
              <Button to="/about" variant="outline-light">
                Meet the Founder <span>↗</span>
              </Button>
              <Button to="/donate" variant="teal">
                Sponsor via Stripe (₱ PHP) <span>💳</span>
              </Button>
            </div>

            <div className="hero-note">
              <span className="note-line" aria-hidden="true" />
              <p>PURPOSEFUL PLAY. EQUITABLE ACCESS. COLLECTIVE GROWTH.</p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-topline">
              <span>SYSTEM ARCHITECTURE // 001</span>
              <span>THE CADARENA ECOSYSTEM</span>
            </div>

            {/* Fig 01 Frame with High-Quality SVG Mission Artwork */}
            <div className="image-frame-container hero-frame">
              <img
                src={communityGamingImg}
                alt="CadaArena Community Gaming blueprint showing player nodes, collaborative controllers, and toxicity-free arena guidelines"
                className="frame-image"
                loading="eager"
              />
              <span className="frame-label">FIG. 01 // COMMUNITY INFRASTRUCTURE</span>
            </div>

            <div className="visual-bottomline">
              <span>COMMUNITY-FIRST CHARTER</span>
              <span>CENTRAL LUZON &bull; PH</span>
            </div>

            <div className="floating-tag">
              <span className="tag-symbol" aria-hidden="true">❖</span>
              <span>
                INCLUSIVE ACCESS.
                <br />
                DIGITAL WELLNESS.
              </span>
            </div>
          </div>
        </div>

        <div className="hero-index">
          <span>01 — EXECUTIVE OVERVIEW</span>
          <span>SCROLL TO EXPLORE ARCHITECTURE ↓</span>
        </div>
      </section>

      {/* ========================================================
          MISSION & VISION SECTION
          ======================================================== */}
      <section className="mission section-pad" id="mission" aria-labelledby="mission-heading">
        <div className="container mission-grid">
          <div className="section-label">
            <span className="section-number">01</span>
            <span>CHARTER</span>
          </div>

          <div className="mission-content">
            <p className="eyebrow">INSTITUTIONAL FOUNDATION</p>
            <h2 id="mission-heading">
              Beyond entertainment.
              <br />
              <span className="text-teal">A platform for youth empowerment.</span>
            </h2>

            <p className="body-copy">
              CadaArena was established on the conviction that interactive
              entertainment is the primary cultural language of today's youth.
              However, commercial gaming platforms often foster predatory
              monetization, hostile competitive lobbies, and prohibitive
              hardware barriers that alienate underprivileged students.
            </p>

            <p className="body-copy">
              We repurpose interactive media into an instrument for empathy,
              accessible computational thinking, and peer camaraderie. Through
              curated low-spec software clinics, community hardware drives,
              and structured peer mentorship, CadaArena converts isolated screen
              time into constructive community engagement.
            </p>

            {/* Explicit Mission & Vision Cards */}
            <div className="foundation-cards-grid">
              <div className="foundation-card mission-box">
                <div className="foundation-card-header">
                  <span className="foundation-badge badge-amber">MISSION STATEMENT</span>
                  <span className="foundation-icon-svg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B56000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"/>
                      <circle cx="12" cy="12" r="6"/>
                      <circle cx="12" cy="12" r="2"/>
                    </svg>
                  </span>
                </div>
                <h3>Our Mission</h3>
                <p>
                  To cultivate toxicity-free, accessible gaming communities where
                  young individuals build lasting interpersonal connections,
                  discover creative software skills, and engage in collaborative,
                  purpose-driven play.
                </p>
              </div>

              <div className="foundation-card vision-box">
                <div className="foundation-card-header">
                  <span className="foundation-badge badge-teal">VISION STATEMENT</span>
                  <span className="foundation-icon-svg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E6864" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    </svg>
                  </span>
                </div>
                <h3>Our Vision</h3>
                <p>
                  A digital culture where gaming is recognized as a catalyst
                  for educational equity, technological literacy, and healthy
                  human connection across student communities in the Philippines.
                </p>
              </div>
            </div>

            <div className="mission-actions">
              <Link to="/about" className="underlined-link">
                Review founder Michaela Angela Libut's methodology <span>↗</span>
              </Link>
            </div>
          </div>

          <div className="mission-stamp" aria-hidden="true">
            <span>PURPOSE</span>
            <span className="stamp-symbol">❖</span>
            <span>EQUITY</span>
            <span>GROWTH</span>
          </div>
        </div>
      </section>

      {/* ========================================================
          WHAT WE DO (CORE PILLARS) SECTION
          ======================================================== */}
      <section className="what-we-do section-pad" id="what-we-do" aria-labelledby="pillars-heading">
        <div className="container">
          <SectionHeading
            number="02"
            numberLabel="OPERATIONAL SCOPE"
            eyebrow="WHAT THE ORGANIZATION DOES"
            title="Three core strategic pillars of"
            accentText="community intervention."
            accentColor="amber"
            subtitle="CadaArena conducts systematic initiatives focused on eliminating behavioral toxicity, bridging the digital hardware divide, and providing student technical mentorship."
          />

          <div className="pillars-grid">
            <div className="pillar-item">
              <div className="pillar-num-badge">01</div>
              <h3>Civic &amp; Moderated Digital Hubs</h3>
              <p>
                We construct and actively steward positive multiplayer spaces
                governed by a rigorous Code of Mutual Respect, protecting novice
                and marginalized players from lobby harassment.
              </p>
              <ul className="pillar-list">
                <li>Actively moderated squad voice channels &amp; game lobbies</li>
                <li>Comprehensive anti-cyberbullying charter &amp; accountability</li>
                <li>Welcoming beginner-tier collaborative play evenings</li>
              </ul>
            </div>

            <div className="pillar-item">
              <div className="pillar-num-badge">02</div>
              <h3>Digital Literacy &amp; Game Engineering</h3>
              <p>
                We leverage student interest in gaming as an accessible pipeline
                into computer science, digital art, UI/UX design, and software
                engineering fundamentals.
              </p>
              <ul className="pillar-list">
                <li>Free workshops on game logic, script design, and physics</li>
                <li>Beginner asset generation, sound design, and narrative writing</li>
                <li>Peer code reviews and technical collaboration circles</li>
              </ul>
            </div>

            <div className="pillar-item">
              <div className="pillar-num-badge">03</div>
              <h3>Hardware Equity &amp; Low-Spec Advocacy</h3>
              <p>
                We reject economic gatekeeping in gaming. We promote software
                optimized for modest computers and curate community hardware
                redistribution programs for student participants.
              </p>
              <ul className="pillar-list">
                <li>Low-spec optimization frameworks &amp; performance audits</li>
                <li>Catalog of open-source and browser-native cooperative titles</li>
                <li>Collegiate peripheral lending drives across partner institutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          COMMUNITY CAUSES & ISSUES SUPPORTED
          ======================================================== */}
      <section className="causes section-pad" id="causes" aria-labelledby="causes-heading">
        <div className="container">
          <div className="causes-header-flex">
            <SectionHeading
              number="03"
              numberLabel="ADVOCACY DOMAINS"
              eyebrow="CAUSES &amp; COMMUNITY ISSUES WE SUPPORT"
              title="Addressing systematic challenges in"
              accentText="contemporary gaming culture."
              accentColor="teal"
            />
            <p className="body-copy header-side-copy">
              Grounding our non-profit mission in empirical community realities
              across student and grassroots multiplayer ecosystems.
            </p>
          </div>

          <div className="causes-grid">
            <CauseCard
              iconSymbol="🛡"
              tag="MENTAL WELLNESS"
              title="Eradicating Toxicity &amp; Lobby Harassment"
              challenge="Over 70% of adolescent and collegiate gamers encounter verbal hostility, hate speech, or gatekeeping in competitive multiplayer titles."
              action="CadaArena institutes enforceable positive-play guidelines, curated peer squad matching, and safe havens emphasizing sportsmanship."
            />

            <CauseCard
              iconSymbol="💻"
              tag="EQUITY &amp; ACCESS"
              title="Bridging the Hardware Economic Divide"
              challenge="Prohibitive consumer GPU pricing and predatory pay-to-win mechanisms exclude students from underprivileged backgrounds from participating."
              action="We curate high-value low-spec titles, organize community hardware refurbishment drives, and fund student access in Philippine Pesos (₱ PHP)."
            />

            <CauseCard
              iconSymbol="🌱"
              tag="DIGITAL ETHICS"
              title="Promoting Screentime Balance &amp; Digital Health"
              challenge="Manipulative engagement loops, addictive gacha designs, and excessive screentime generate student burnout and academic impairment."
              action="We conduct digital balance awareness clinics, structure time-capped community sessions, and celebrate games with deep artistic merit."
            />

            <CauseCard
              iconSymbol="🤝"
              tag="CIVIC INCLUSION"
              title="Fostering Diversity &amp; Psychological Safety"
              challenge="Underrepresented youth, female competitors, and neurodivergent players frequently endure targeted hostility in collegiate esports circles."
              action="CadaArena enforces strict zero-tolerance anti-discrimination bylaws and intentionally spotlights diverse student leaders and developers."
            />
          </div>

          {/* Visual Divider / Community Banner */}
          <div className="causes-banner">
            <div className="causes-banner-copy">
              <span className="banner-tag">COMMUNITY INFRASTRUCTURE FRAMEWORK</span>
              <h3>Technology connects us. Shared principles keep us united.</h3>
              <p>
                CadaArena's decentralized community topology connects hardware
                access hubs, peer mentorship nodes, and safe multiplayer arenas.
              </p>
            </div>
            <div className="causes-banner-image">
              <img
                src={digitalInclusionImg}
                alt="CadaArena Community Infrastructure Diagram illustrating device access, safe spaces, and peer mentorship network"
                className="banner-svg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          PROGRAMS, ACTIVITIES & INITIATIVES
          ======================================================== */}
      <section className="programs section-pad" id="initiatives" aria-labelledby="programs-heading">
        <div className="container">
          <div className="programs-heading">
            <div>
              <p className="eyebrow">04 / CURRENT INITIATIVES</p>
              <h2 id="programs-heading">Programs driving systemic change.</h2>
            </div>
            <p className="body-copy">
              Structured community programs, skill-building clinics, and
              collaborative gatherings delivering tangible social impact.
            </p>
          </div>

          <div className="program-grid">
            <ProgramCard
              index="01"
              category="ACCESS"
              theme="amber"
              symbol="+"
              icon="↗"
              title="The Open Arena Project."
              description="A systematic hardware refurbishment drive collecting operational peripherals and auditing lightweight game titles to ensure full student accessibility."
              footerTag="ANNUAL HARDWARE LENDING DRIVE"
            />

            <ProgramCard
              index="02"
              category="GROWTH"
              theme="teal"
              symbol="↗"
              icon="↗"
              title="Level Up Peer Mentorship."
              description="Connects experienced student developers and disciplined competitive players with newcomers for structured instruction in coding, game logic, and ethics."
              footerTag="CURRICULUM MENTORSHIP CLINICS"
            />

            <ProgramCard
              index="03"
              category="COMMUNITY"
              theme="lavender"
              symbol="◎"
              icon="↗"
              title="Creative Play Game Jams."
              description="Bi-weekly casual mixers and 48-hour collaborative game development jams celebrating innovative storytelling and cooperative problem-solving."
              footerTag="BI-WEEKLY COMMUNITY HACKATHONS"
            />
          </div>
        </div>
      </section>

      {/* ========================================================
          CLOSING CALL TO ACTION
          ======================================================== */}
      <section className="home-cta section-pad" aria-labelledby="cta-heading">
        <div className="container cta-inner">
          <p className="eyebrow">05 / INSTITUTIONAL PARTNERSHIP</p>
          <h2 id="cta-heading">
            Every movement begins
            <br />
            with a <span className="text-amber">shared commitment.</span>
          </h2>
          <p>
            CadaArena is an open-access non-profit organization founded by{" "}
            <strong>Michaela Angela Libut</strong>. Whether you are an aspiring
            student developer, a collegiate gamer seeking a supportive squad, or an
            advocate championing digital wellness, your participation matters.
          </p>

          <div className="cta-button-group">
            <Button to="/about" variant="light">
              Meet Founder Michaela <span>↗</span>
            </Button>
            <Button to="/donate" variant="accent">
              Contribute via Stripe (₱ PHP) <span>💳</span>
            </Button>
            <Button href="#mission" variant="outline-light">
              Explore Our Framework <span>↓</span>
            </Button>
          </div>

          <span className="cta-decoration" aria-hidden="true">CA.</span>
        </div>
      </section>
    </>
  );
}
