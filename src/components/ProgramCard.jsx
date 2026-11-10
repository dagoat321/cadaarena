/**
 * Reusable Program Card component for initiatives, workshops, and activities.
 */
export default function ProgramCard({
  index = "01",
  category = "INITIATIVE",
  title,
  description,
  footerTag = "ACTIVE PROGRAM",
  theme = "amber",
  icon = "↗",
  symbol = "+",
}) {
  return (
    <article className={`program-card card-${theme}`}>
      <div className="card-top">
        <span>{index} / {category}</span>
        <span className="card-symbol" aria-hidden="true">{icon}</span>
      </div>

      <div className={`card-graphic graphic-${theme}`} aria-hidden="true">
        {symbol}
      </div>

      <h3>{title}</h3>
      <p>{description}</p>

      <span className="card-footer">{footerTag}</span>
    </article>
  );
}

