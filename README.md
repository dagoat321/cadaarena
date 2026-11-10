# CadaArena — Student Non-Profit Gaming Community Website

> **"Play With Purpose. Grow Together."**  
> An open-access non-profit web platform founded by **Michaela Angela Libut** for **BSIT-3B** in **Integrative Programming and Technologies (IPT)**.

---

## 📖 1. What the Website is About

**CadaArena** is a student-led non-profit initiative dedicated to making gaming culture healthier, friendlier, and more accessible for young people and students in the Philippines.

While commercial gaming companies often focus on making money through microtransactions and high-pressure competitive modes (which can lead to toxic player behavior and online harassment), CadaArena treats gaming as a creative tool for:
1. **Building real friendships** in safe, moderated spaces.
2. **Learning technology skills** such as coding, game logic, and UI design.
3. **Sharing equipment** with students who cannot afford expensive gaming computers.

---

## 🎯 2. Purpose and Intended Users

### Purpose
* To promote positive sportsmanship and eliminate cyberbullying in multiplayer games.
* To bridge the digital divide by recommending games that run on low-cost computers.
* To connect experienced student developers with beginners through free peer coaching.
* To collect community donations in Philippine Pesos (`₱ PHP`) to fund free student workshops and hardware lending drives.

### Intended Users
* **Student Gamers:** Looking for toxicity-free casual games and supportive teammates.
* **Beginner Coders & Creators:** Interested in learning how games are created.
* **School Partners & Teachers:** Wanting to promote digital wellness and positive screentime.
* **Donors & Sponsors:** Community members who want to support youth digital education through secure Stripe contributions.

---

## ⚙️ 3. How the Website Works (System Architecture & Information Flow)

### High-Level Architecture

The website uses a modern **Client-Side Component Architecture** powered by React 19 and Vite 8:

```text
┌─────────────────────────────────────────────────────────────┐
│                       Browser / User                        │
└──────────────┬───────────────────────────────┬──────────────┘
               │                               │
               ▼                               ▼
    ┌──────────────────────┐        ┌──────────────────────┐
    │     React Router     │        │    Stripe Elements   │
    │  (/, /about, /donate)│        │   (CardElement PHP)  │
    └──────────┬───────────┘        └──────────┬───────────┘
               │                               │
               ▼                               ▼
    ┌──────────────────────┐        ┌──────────────────────┐
    │  aboutUsData.json    │        │  Stripe API Servers  │
    │ (Dynamic JSON Feed)  │        │ (Secure Tokenization)│
    └──────────┬───────────┘        └──────────┬───────────┘
               │                               │
               ▼                               ▼
    ┌─────────────────────────────────────────────────────────┐
    │               Rendered UI / User Experience             │
    │        (Home Page, About Us, Official Receipt)          │
    └─────────────────────────────────────────────────────────┘
```

### How Information Flows Through the System

1. **Routing Flow:**
   * When a visitor clicks **Home**, **About Us**, or **Donate**, `React Router` listens to the URL and swaps the displayed page component instantly without a full page reload.

2. **JSON Data Flow (Requirement #3):**
   * All biographical, historical, and organizational information for the **About Us** page is stored centrally in [`src/data/aboutUsData.json`](src/data/aboutUsData.json).
   * When `About.jsx` renders, it automatically reads and parses this `.json` file into memory.
   * If any detail changes (like adding a new milestone or changing a role), editing the JSON file automatically updates the website without rewriting JSX code.
   * Visitors can even click the **"{ } View Source .JSON Object"** button to inspect the raw data structure live.

3. **Stripe Payment Flow (Requirement #2):**
   * When a user visits `/donate`, they choose an amount (e.g. `₱150`, `₱350`, `₱750`, `₱1,500`, or custom `₱`) and enter their name.
   * The user enters their card number into Stripe's secure `CardElement`.
   * **Stripe never sends plain card numbers to our website.** Instead, `@stripe/react-stripe-js` encrypts the card directly through Stripe's secure cloud servers and returns a verified `PaymentMethod` token.
   * Once confirmed, the website generates a transaction receipt with a Reference ID (`TXN-CDA-XXXXXX`), timestamp, and an official printable receipt.

---

## 📄 4. What Each Major Page & Feature Does

### 1. Home Page (`/`)
* **Hero Banner:** Introduces the project's motto (*"Gaming is better together"*), founder name (*Michaela Angela Libut*), and action buttons.
* **System Blueprint (Fig. 01):** Shows an editorial blueprint graphic representing player nodes and toxicity-free guidelines.
* **Mission & Vision Cards:** Explains the organization's goals clearly.
* **Operational Pillars:** Details our 3 areas of work (*Civic Hubs*, *Digital Literacy*, *Hardware Equity*).
* **Community Causes:** Highlights 4 issues in modern gaming (*Toxicity*, *Hardware Divide*, *Digital Burnout*, *Underrepresentation*).
* **Active Programs:** Displays cards for *The Open Arena Project*, *Level Up Peer Mentorship*, and *Creative Play Game Jams*.
* **Closing CTA:** Encourages visitors to support or contact the team.

### 2. About Us Page (`/about`)
* **JSON Compliance Banner:** Shows that the page's data is dynamically sourced from `src/data/aboutUsData.json`, with a live `{ }` JSON code viewer button.
* **Leadership Spotlight:** Displays founder **Michaela Angela Libut**'s verified photo, student details (*BSIT-3B*), and core quote.
* **My Story Section:** Describes Michaela's personal journey as an IT student and gamer.
* **Why a Non-Profit Section:** Explains why community health comes before corporate monetization.
* **Prototyping Lab:** Illustrates the workstation where the website was designed and built.
* **Core Values List:** Outlines our 4 values (*Creativity*, *Inclusivity*, *Growth*, *Equity*).
* **Roadmap & Milestones:** Outlines short-term goals for 2026–2027 and long-term aspirations.

### 3. Payment & Community Donation Page (`/donate`)
* **Sponsorship Tiers in Philippine Pesos (₱ PHP):**
  * `₱150 PHP`: Youth Participant Tier (Workshop materials)
  * `₱350 PHP`: Hardware Access Tier (Refurbished controllers & peripherals)
  * `₱750 PHP`: Digital Literacy Tier (Server hosting & game jam toolkits)
  * `₱1,500 PHP`: Arena Sponsor Tier (Collegiate hackathons)
  * Custom Amount in ₱ PHP.
* **Stripe Card Input:** Powered by official `@stripe/react-stripe-js`.
* **Instant Electronic Receipt:** Generates a confirmed receipt with a unique ID and a print button.

### 4. Navigation & Footer
* **Top Navigation Bar:** Sticky navbar with brand logo, desktop links, **"About Us"**, a mobile hamburger drawer, and a direct **"Donate 💳"** button.
* **Footer:** Displays BSIT-3B information, navigation links, advocacy pillars, and copyright notices.

---

## 🛠️ 5. Technologies and Tools Used

* **React 19:** Modern JavaScript library for building component-based user interfaces.
* **Vite 8:** Lightning-fast front-end development server and production bundler.
* **React Router v7 (`react-router-dom`):** Handles client-side navigation between Home, About Us, and Donate.
* **Stripe React SDK (`@stripe/react-stripe-js` & `@stripe/stripe-js`):** Bank-grade encrypted card payments in Philippine Pesos (`₱ PHP`).
* **JSON (JavaScript Object Notation):** Structured external data feed (`aboutUsData.json`) powering the About Us page.
* **Modern CSS & Google Fonts:** Clean, responsive design tokens with *Manrope*, *DM Sans*, and *DM Mono* typography.
* **Node.js & npm:** Runtime environment and package manager.

---

## 🚀 6. How to Run the Website Locally

1. Open your terminal in the project directory:
   ```powershell
   cd "d:\ELA DELL PC\SCHOOL\IPT_FinalsLabAct"
   ```

2. Make sure Node.js is recognized in your session:
   ```powershell
   $env:PATH = "C:\Program Files\nodejs;" + $env:PATH
   ```

3. Install dependencies (if you haven't already):
   ```powershell
   npm install
   ```

4. Start the local server:
   ```powershell
   npm run dev
   ```

5. Open your browser and go to:
   👉 **`http://localhost:5173/`** (or `http://localhost:5174/`)

---

## 🎓 7. Academic Submission Information

* **Course & Section:** BSIT-3B (Bachelor of Science in Information Technology)
* **Subject:** Integrative Programming and Technologies (IPT)
* **Student Founder:** Michaela Angela Libut
* **Compliance Document:** See [`COMPLIANCE_REPORT.md`](COMPLIANCE_REPORT.md)
* **Year:** 2026
