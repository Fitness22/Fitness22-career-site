import { Link } from 'react-router-dom';
import { jobs } from '../data/jobs.js';
import JobMeta from './JobMeta.jsx';
import useTilt from '../hooks/useTilt.js';
import Accent from './Accent.jsx';

export default function JobList() {
  return (
    <section id="jobs" className="section">
      <h2 className="section-title"><Accent text="Current *job openings*" /></h2>

      {jobs.length === 0 ? (
        <p className="lead center">There are no open positions right now — check back soon.</p>
      ) : (
        <ul className="job-grid">
          {jobs.map((job) => (
            <li key={job.slug}>
              <JobCard job={job} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

// Tilts in 3D toward the mouse, like the team cards on the Who We Are page.
function JobCard({ job }) {
  const tilt = useTilt();

  return (
    <Link to={`/jobs/${job.slug}`} className="job-card" {...tilt}>
      <span className="job-card-title">{job.title}</span>
      <JobMeta job={job} className="job-card-meta" />
    </Link>
  );
}
