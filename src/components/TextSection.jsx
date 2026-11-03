import Accent from './Accent.jsx';

export default function TextSection({ id, title, paragraphs }) {
  return (
    <section id={id} className="section">
      <div className="narrow">
        <h2 className="section-title"><Accent text={title} /></h2>
        {paragraphs.map((text) => (
          <p key={text} className="lead">{text}</p>
        ))}
      </div>
    </section>
  );
}
