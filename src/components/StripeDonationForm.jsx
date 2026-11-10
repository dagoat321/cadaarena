import { useState } from "react";
import {
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Button from "./Button";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#F5F1EA",
      fontFamily: "'DM Sans', sans-serif",
      fontSmoothing: "antialiased",
      fontSize: "15px",
      letterSpacing: "0.2px",
      "::placeholder": {
        color: "#6F8297",
      },
    },
    invalid: {
      color: "#FF6B6B",
      iconColor: "#FF6B6B",
    },
  },
};

const PRESET_TIERS_PHP = [
  { value: 150, label: "₱150", title: "Youth Participant Tier", desc: "Funds learning materials for 1 student workshop seat" },
  { value: 350, label: "₱350", title: "Hardware Access Tier", desc: "Supports refurbished peripheral collection and distribution" },
  { value: 750, label: "₱750", title: "Digital Literacy Tier", desc: "Maintains moderated server hosting and game jam toolkits" },
  { value: 1500, label: "₱1,500", title: "Arena Sponsor Tier", desc: "Sponsors regional student hackathon & positive play guild" },
];

export default function StripeDonationForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [amount, setAmount] = useState(350);
  const [customAmount, setCustomAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorOrganization, setDonorOrganization] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const selectedTotal = customAmount ? parseFloat(customAmount) || 0 : amount;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      setErrorMessage("Payment infrastructure initializing. Please try again momentarily.");
      return;
    }

    if (selectedTotal < 50) {
      setErrorMessage("The minimum contribution amount is ₱50.00 PHP.");
      return;
    }

    if (!donorName.trim()) {
      setErrorMessage("Please enter your full name or entity name for billing records.");
      return;
    }

    setIsProcessing(true);
    setErrorMessage("");

    const cardElement = elements.getElement(CardElement);

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: {
          name: donorName.trim(),
          email: donorEmail.trim() || undefined,
        },
      });

      if (error) {
        setErrorMessage(error.message || "Card verification failed. Please check your credentials.");
        setIsProcessing(false);
      } else {
        const referenceId = `TXN-CDA-${Math.floor(100000 + Math.random() * 900000)}`;
        setPaymentSuccess({
          referenceId,
          stripeId: paymentMethod.id,
          amount: selectedTotal.toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
          donor: donorName.trim(),
          organization: donorOrganization.trim() || "Individual Contributor",
          last4: paymentMethod.card?.last4 || "4242",
          brand: (paymentMethod.card?.brand || "Visa").toUpperCase(),
          timestamp: new Date().toLocaleString("en-PH", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }),
        });
        setIsProcessing(false);
      }
    } catch (err) {
      setErrorMessage("Network error during payment verification. Please retry.");
      setIsProcessing(false);
    }
  };

  const handleReset = () => {
    setPaymentSuccess(null);
    setDonorName("");
    setDonorEmail("");
    setDonorOrganization("");
    setCustomAmount("");
    setAmount(350);
    setErrorMessage("");
  };

  return (
    <div className="stripe-donation-wrapper">
      {/* PCI-DSS & SECURE GATEWAY BADGE */}
      <div className="gateway-meta-strip">
        <div className="security-tag">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          <span>PCI-DSS COMPLIANT &bull; STRIPE ENCRYPTED (PHP)</span>
        </div>
        <span className="currency-indicator">CURRENCY: PHILIPPINE PESO (PHP ₱)</span>
      </div>

      {paymentSuccess ? (
        <div className="payment-success-card">
          <div className="success-badge-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <span className="success-eyebrow">TRANSACTION CONFIRMED</span>
          <h3>Official Contribution Receipt</h3>
          <p className="success-message">
            Thank you, <strong>{paymentSuccess.donor}</strong>. Your sponsorship of{" "}
            <span className="text-teal font-weight-bold">₱{paymentSuccess.amount} PHP</span> has been
            allocated to CadaArena's digital literacy and hardware access initiatives.
          </p>

          <div className="receipt-box">
            <div className="receipt-header-row">
              <span className="receipt-org-label">CADARENA COMMUNITY INITIATIVE</span>
              <span className="receipt-status-pill">STATUS: SETTLED</span>
            </div>

            <div className="receipt-divider" />

            <div className="receipt-row">
              <span className="receipt-label">Official Reference:</span>
              <code className="receipt-value text-amber">{paymentSuccess.referenceId}</code>
            </div>
            <div className="receipt-row">
              <span className="receipt-label">Stripe Payment Method ID:</span>
              <code className="receipt-value">{paymentSuccess.stripeId}</code>
            </div>
            <div className="receipt-row">
              <span className="receipt-label">Contributor:</span>
              <span className="receipt-value">{paymentSuccess.donor}</span>
            </div>
            <div className="receipt-row">
              <span className="receipt-label">Affiliation / Entity:</span>
              <span className="receipt-value">{paymentSuccess.organization}</span>
            </div>
            <div className="receipt-row">
              <span className="receipt-label">Payment Channel:</span>
              <span className="receipt-value">{paymentSuccess.brand} ending in {paymentSuccess.last4}</span>
            </div>
            <div className="receipt-row">
              <span className="receipt-label">Processed At:</span>
              <span className="receipt-value">{paymentSuccess.timestamp} PHT</span>
            </div>

            <div className="receipt-divider" />

            <div className="receipt-row receipt-total-row">
              <span>Total Contribution:</span>
              <span className="receipt-total-amount">₱{paymentSuccess.amount} PHP</span>
            </div>
          </div>

          <p className="receipt-disclaimer">
            * This transaction receipt is generated in demonstration mode for academic evaluation under the Integrative Programming &amp; Technologies (IPT) Web Capstone curriculum.
          </p>

          <div className="success-actions">
            <Button onClick={() => window.print()} variant="outline-light">
              Print Official Receipt
            </Button>
            <Button onClick={handleReset} variant="accent">
              Make Another Contribution
            </Button>
            <Button to="/" variant="light">
              Return to Homepage <span>↗</span>
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="stripe-form" noValidate>
          {/* STEP 1: CONTRIBUTION TIER */}
          <div className="form-group">
            <div className="form-label-row">
              <label className="form-label" htmlFor="amount-selection">
                01 // SELECT SPONSORSHIP TIER (PHP)
              </label>
              <span className="selected-amount-tag">
                TOTAL: ₱{selectedTotal.toLocaleString("en-PH", { minimumFractionDigits: 2 })} PHP
              </span>
            </div>

            <div className="donation-presets-grid" id="amount-selection">
              {PRESET_TIERS_PHP.map((tier) => (
                <button
                  type="button"
                  key={tier.value}
                  className={`preset-btn ${
                    amount === tier.value && !customAmount ? "active" : ""
                  }`}
                  onClick={() => {
                    setAmount(tier.value);
                    setCustomAmount("");
                  }}
                  aria-pressed={amount === tier.value && !customAmount}
                >
                  <div className="preset-header">
                    <span className="preset-val">{tier.label}</span>
                    <span className="preset-tier-title">{tier.title}</span>
                  </div>
                  <span className="preset-desc">{tier.desc}</span>
                </button>
              ))}
            </div>

            <div className="custom-amount-wrapper">
              <span className="custom-currency-symbol" aria-hidden="true">₱</span>
              <input
                type="number"
                min="50"
                step="50"
                placeholder="Or specify custom amount in Philippine Pesos (Min. ₱50 PHP)"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="custom-amount-input"
                aria-label="Custom contribution amount in Philippine Pesos"
              />
              <span className="custom-currency-code">PHP</span>
            </div>
          </div>

          {/* STEP 2: CONTRIBUTOR PROFILE */}
          <div className="form-group">
            <label className="form-label">
              02 // CONTRIBUTOR OR SPONSOR INFORMATION
            </label>
            <div className="donor-fields-grid">
              <div>
                <input
                  type="text"
                  placeholder="Full Legal Name or Registered Handle *"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className="stripe-input"
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Official Email Address (For Electronic Receipt)"
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  className="stripe-input"
                />
              </div>
            </div>

            <div style={{ marginTop: "12px" }}>
              <input
                type="text"
                placeholder="School / Organization / Community Affiliation (Optional)"
                value={donorOrganization}
                onChange={(e) => setDonorOrganization(e.target.value)}
                className="stripe-input"
              />
            </div>
          </div>

          {/* STEP 3: PAYMENT CREDENTIALS (STRIPE) */}
          <div className="form-group">
            <div className="card-label-row">
              <label className="form-label" style={{ marginBottom: 0 }}>
                03 // SECURE CARD PROCESSING (CREDIT / DEBIT)
              </label>
              <div className="card-schemes-icons">
                <span className="card-brand-badge">VISA</span>
                <span className="card-brand-badge">MASTERCARD</span>
                <span className="card-brand-badge">JCB</span>
              </div>
            </div>

            <div className="stripe-card-field-container">
              <CardElement options={CARD_ELEMENT_OPTIONS} />
            </div>

            <div className="card-guidelines-box">
              <div className="guidelines-row">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFB86B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="16" x2="12" y2="12"/>
                  <line x1="12" y1="8" x2="12.01" y2="8"/>
                </svg>
                <span>
                  <strong>Stripe Testing Credentials:</strong> Enter <code>4242 4242 4242 4242</code> with any future expiry date and any 3-digit CVC.
                </span>
              </div>
            </div>
          </div>

          {/* ERROR DISPLAY */}
          {errorMessage && (
            <div className="stripe-error-box" role="alert">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>{errorMessage}</span>
            </div>
          )}

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={!stripe || isProcessing}
            className="button button-accent submit-stripe-btn"
          >
            {isProcessing ? (
              <span className="btn-loading-flex">
                <span className="spinner" /> Authorizing Payment with Stripe...
              </span>
            ) : (
              <span>
                Process Contribution of ₱{selectedTotal.toLocaleString("en-PH", { minimumFractionDigits: 2 })} PHP
              </span>
            )}
          </button>

          <p className="form-footer-disclaimer">
            Transactions are encrypted via TLS 1.3 and processed by Stripe, Inc. CadaArena adheres to student non-profit transparency standards.
          </p>
        </form>
      )}
    </div>
  );
}
