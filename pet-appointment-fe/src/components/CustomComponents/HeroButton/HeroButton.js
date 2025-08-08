import './HeroButton.css'

export default function HeroButton({ children, ...attributes }) {
  return (
    <button
      type="button"
      className="hero-button-base"
      {...attributes}
    >
      {children}
    </button>
  );
}