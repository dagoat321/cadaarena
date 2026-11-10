/**
 * Reusable SectionHeading component with editorial numbering,
 * monospaced eyebrow, display typography, and lead copy.
 */
export default function SectionHeading({
  number,
  numberLabel,
  eyebrow,
  title,
  accentText,
  accentColor = "teal",
  subtitle,
  className = "",
}) {
  return (
    <div className={`section-heading-wrapper ${className}`}>
      {number && (
        <div className="section-label">
          <span className="section-number">{number}</span>
          <span>{numberLabel || "OVERVIEW"}</span>
        </div>
      )}

      {eyebrow && <p className="eyebrow">{eyebrow}</p>}

      <h2>
        {title}{" "}
        {accentText && (
          <span className={`text-${accentColor}`}>{accentText}</span>
        )}
      </h2>

      {subtitle && <p className="body-copy heading-subtitle">{subtitle}</p>}
    </div>
  );
}

