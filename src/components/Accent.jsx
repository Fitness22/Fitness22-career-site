// Renders text with the parts wrapped in *asterisks* shown in brand green.
//   <Accent text="Current *job openings*" />  →  Current <span class="accent">job openings</span>
export default function Accent({ text }) {
  const parts = text.split('*');
  return (
    <>
      {parts.map((part, i) => (i % 2 === 1 ? <span key={i} className="accent">{part}</span> : part))}
    </>
  );
}
