export default function SectionHeading({ number, label, title, children }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span>{number}</span> / {label}
      </p>
      <div className="section-heading-main">
        <h2>{title}</h2>
        {children && <p>{children}</p>}
      </div>
    </div>
  );
}
