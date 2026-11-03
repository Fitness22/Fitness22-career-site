import { gallery } from '../data/content.js';

// Photo collage: three photos on the first row, a narrow + wide photo on the second.
export default function Gallery() {
  return (
    <section className="gallery">
      {gallery.map((src) => (
        <img key={src} src={src} alt="" loading="lazy" />
      ))}
    </section>
  );
}
