import { Link, useParams } from 'react-router';
import { useStore } from '../store/storeContext';
import { formatDate } from '../utils/date';

export const ApplicationDetails = () => {
  const { id } = useParams();
  const { applications } = useStore();

  const application = applications.find((app) => app.id === id);

  if (!application) {
    return (
      <div>
        <h1>Application not found</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }

  const { company, role, status, dateApplied } = application;

  return (
    <div>
      <h1>{company}</h1>
      <p>{role}</p>
      <p>{status}</p>
      <p>{formatDate(dateApplied)}</p>
    </div>
  );
};
