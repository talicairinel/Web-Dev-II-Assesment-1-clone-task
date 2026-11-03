import './Button.css';

/**
 * Shared button used for "WATCH NOW" and "SEARCH".
 * Extra classes can be passed in via `className` for layout tweaks.
 */
export default function Button({ children, className = '', ...props }) {
  return (
    <button type="button" className={`btn ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}
