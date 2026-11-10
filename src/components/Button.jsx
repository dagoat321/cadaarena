import { Link } from "react-router-dom";

/**
 * Reusable Button component supporting internal router links,
 * external hyperlinks, or native HTML button triggers.
 */
export default function Button({
  to,
  href,
  onClick,
  variant = "accent",
  children,
  className = "",
  type = "button",
  target,
  rel,
  ariaLabel,
}) {
  const baseClasses = `button button-${variant} ${className}`.trim();

  // If internal route link provided
  if (to) {
    return (
      <Link to={to} className={baseClasses} onClick={onClick} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  // If external or anchor href provided
  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        onClick={onClick}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : rel}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  // Otherwise standard native button
  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

