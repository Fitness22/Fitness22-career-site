import { Link, useParams } from 'react-router-dom';
import Markdown from 'react-markdown';
import { ChevronRight, Mail } from 'lucide-react';
import Cover from '../components/Cover.jsx';
import JobMeta from '../components/JobMeta.jsx';
import { LinkedInIcon } from '../components/icons.jsx';
import NotFound from './NotFound.jsx';
import { findJob } from '../data/jobs.js';
import { jobPage, links } from '../data/content.js';
import Accent from '../components/Accent.jsx';

// Opens a new LinkedIn post, pre-filled with the job and its link.
const linkedInShareUrl = (title, url) =>
  `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(`We're hiring: ${title} at Fitness22! 💚\n${url}`)}`;

export default function JobPage() {
  const { slug } = useParams();
  const job = findJob(slug);
  if (!job) return <NotFound />;

  const applyUrl = `mailto:${links.applyEmail}?subject=${encodeURIComponent(`Application for ${job.title}`)}`;
  const jobUrl = `${links.siteUrl}/jobs/${slug}`; // public address, used for sharing

  return (
    <>
      <title>{`${job.title} - Fitness22`}</title>

      {/* Plain dark banner behind the (same as home) transparent header */}
      <Cover variant="job">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/#jobs">All Positions</Link>
          <ChevronRight size={14} />
          <span>{job.department}</span>
        </nav>
        <h1 className="cover-title">{job.title}</h1>
        <JobMeta job={job} className="job-meta" />
      </Cover>

      <article className="job">
        <div className="job-layout">
          <div>
            <section className="job-section">
              <h2><Accent text={jobPage.introTitle} /></h2>
              {jobPage.intro.map((text) => (
                <p key={text}>{text}</p>
              ))}

              <ul className="highlights">
                {jobPage.highlights.map(({ icon: Icon, title, text }) => (
                  <li key={title}>
                    <Icon size={36} strokeWidth={1.5} />
                    <div>
                      <strong>{title}</strong>
                      <span>{text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section className="job-section">
              <h2><Accent text={jobPage.descriptionTitle} /></h2>
              <div className="prose">
                <Markdown>{job.description}</Markdown>
              </div>
            </section>

            <a href={applyUrl} className="btn btn--outline btn--black-text job-apply-bottom">Apply Now</a>
          </div>

          <aside className="job-sidebar">
            <a href={applyUrl} className="btn btn--outline btn--black-text">Apply Now</a>
            <div className="share">
              <a
                href={linkedInShareUrl(job.title, jobUrl)}
                target="_blank"
                rel="noreferrer"
                aria-label="Share on LinkedIn"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href={`mailto:?subject=${encodeURIComponent(`${job.title} at Fitness22`)}&body=${encodeURIComponent(jobUrl)}`}
                aria-label="Share by email"
              >
                <Mail size={18} />
              </a>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
