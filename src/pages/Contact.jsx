import { useState } from 'react';
import { CircleCheck } from 'lucide-react';
import Cover from '../components/Cover.jsx';
import StoreBadges from '../components/StoreBadges.jsx';
import { links, pages } from '../data/content.js';
import { developerPages } from '../data/apps.js';
import Accent from '../components/Accent.jsx';

const { contact } = pages;

const collageIcons = [
  '/images/apps/gymverse-icon.png',
  '/images/apps/5k-icon.png',
  '/images/apps/run-tracker-icon.png',
  '/images/apps/10k-icon.png',
];

// There's no backend, so submitting opens the visitor's email app with the message filled in.
function openEmail({ name, email, topic, message }) {
  const subject = `${topic || 'Contact'} - ${name}`;
  const body = `${message}\n\n${name}\n${email}`;
  window.location.href = `mailto:${links.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    openEmail(Object.fromEntries(new FormData(e.target)));
    setSent(true);
  }

  return (
    <>
      <title>Contact Us - Fitness22</title>

      <Cover image={contact.image} variant="banner">
        <h1 className="cover-title">{contact.title}</h1>
      </Cover>

      <section className="section contact">
        <div className="contact-intro">
          <h2><Accent text={contact.heading} /></h2>
          <p>{contact.text}</p>
        </div>

        <div className="contact-card">
          {sent ? (
            <div className="contact-thanks">
              <h3><Accent text="Thank *You!*" /></h3>
              <CircleCheck size={56} />
              <p>Your email app should now be open with your message — just hit send.</p>
              <button className="btn btn--outline btn--black-text" onClick={() => setSent(false)}>Back to form</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <input name="name" placeholder="Your Name" aria-label="Your Name" required />
              <input name="email" type="email" placeholder="Your Email" aria-label="Your Email" required />
              <select name="topic" defaultValue="" aria-label="Choose Topic">
                <option value="" disabled>Choose Topic</option>
                {contact.topics.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
              <textarea name="message" placeholder="Message..." aria-label="Message" rows={5} required />
              <div className="contact-submit">
                <small>{contact.note}</small>
                <button type="submit" className="btn btn--outline btn--black-text">Submit</button>
              </div>
            </form>
          )}
        </div>
      </section>

      <section className="section contact-apps">
        <div className="icon-collage">
          {collageIcons.map((src) => (
            <img key={src} src={src} alt="" />
          ))}
        </div>
        <div>
          <h2><Accent text={contact.appsHeading} /></h2>
          <p>{contact.appsText}</p>
          <StoreBadges appStore={developerPages.appStore} googlePlay={developerPages.googlePlay} />
        </div>
      </section>
    </>
  );
}
