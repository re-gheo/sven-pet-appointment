import './Button.css'

export default function Button({ children, ...attributes }) {
  return (
    <button
      type="button"
      className="button-base"
      {...attributes}
    >
      {children}

    </button>
  );
}