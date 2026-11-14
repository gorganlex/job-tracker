import { Link, useLocation, useNavigate, useParams } from 'react-router';
import { useStore, useStoreDispatch } from '../store/storeContext';
import { StoreAction } from '../store/storeReducer';
import { formatDate } from '../utils/date';

export const ApplicationDetails = () => {
  const { id } = useParams();
  const { applications } = useStore();
  const dispatch = useStoreDispatch();
  const navigate = useNavigate();
  const location = useLocation();

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

  const deleteApp = () => {
    dispatch({ type: StoreAction.deleteApplication, id: application.id });

    navigate('/', { replace: true, state: { deletedApplicationId: id } });
  };

  const goBack = () => {
    if (location.key === 'default') {
      navigate('/');

      return;
    }

    navigate(-1);
  };

  return (
    <div>
      <h1>{company}</h1>
      <p>{role}</p>
      <p>{status}</p>
      <p>{formatDate(dateApplied)}</p>

      <button onClick={deleteApp}>Delete</button>

      <button onClick={goBack}>Go Back</button>
    </div>
  );
};
