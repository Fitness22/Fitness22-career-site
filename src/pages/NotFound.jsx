import { Link } from 'react-router-dom';
import Cover from '../components/Cover.jsx';

export default function NotFound() {
  return (
    <Cover variant="job">
      <h1 className="cover-title">Page not found</h1>
      <Link to="/#jobs" className="btn btn--outline">See job openings</Link>
    </Cover>
  );
}
