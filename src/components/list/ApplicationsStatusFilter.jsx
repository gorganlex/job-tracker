import {
  ApplicationStatus,
  ApplicationStatusFilterAll,
} from '../../data/applicationStatus';
import { useStore, useStoreDispatch } from '../../store/storeContext';
import { StoreActions } from '../../store/storeReducer';

export const ApplicationsStatusFilter = () => {
  const { applications, statusFilter } = useStore();
  const dispatch = useStoreDispatch();

  const statusCountMap = applications.reduce(
    (acc, app) => {
      if (acc[app.status]) {
        acc[app.status] += 1;
      } else {
        acc[app.status] = 1;
      }
      return acc;
    },
    {
      [ApplicationStatusFilterAll]: applications.length,
    },
  );

  const handleStatusClick = (status) =>
    dispatch({ type: StoreActions.setStatusFilter, statusFilter: status });

  const renderStatusChip = (status) => (
    <button
      style={statusFilter === status ? { backgroundColor: 'lightgray' } : {}}
      key={status}
      disabled={!statusCountMap[status]}
      onClick={() => handleStatusClick(status)}
    >
      {status} {statusCountMap[status] || 0}
    </button>
  );

  return (
    <div>
      {[ApplicationStatusFilterAll, ...Object.values(ApplicationStatus)].map(
        renderStatusChip,
      )}
    </div>
  );
};
