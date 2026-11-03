// "Mobile · Main Office (Petah Tiqwa) · Onsite"
export default function JobMeta({ job, className }) {
  const parts = [job.department, job.location, job.workplace].filter(Boolean);
  return <div className={className}>{parts.join(' · ')}</div>;
}
