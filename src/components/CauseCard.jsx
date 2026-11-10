/**
 * Reusable CauseCard component representing community issues and non-profit advocacy pillars.
 */
export default function CauseCard({
  iconSvg,
  iconSymbol = "◈",
  title,
  challenge,
  action,
  tag = "COMMUNITY ADVOCACY",
}) {
  return (
    <article className="cause-card">
      <div className="cause-header">
        <div className="cause-icon-badge" aria-hidden="true">
          {iconSvg ? iconSvg : <span className="icon-symbol-glyph">{iconSymbol}</span>}
        </div>
        <span className="cause-tag">{tag}</span>
      </div>

      <h3 className="cause-title">{title}</h3>

      <div className="cause-section">
        <h4 className="cause-label">CURRENT LANDSCAPE &amp; CHALLENGE</h4>
        <p className="cause-text">{challenge}</p>
      </div>

      <div className="cause-section">
        <h4 className="cause-label">CADARENA STRATEGIC ACTION</h4>
        <p className="cause-text action-text">{action}</p>
      </div>
    </article>
  );
}
