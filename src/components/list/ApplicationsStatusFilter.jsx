import {
  ApplicationStatus,
  StatusFilterAll,
} from '../../data/applicationStatus';
import { useStore, useStoreDispatch } from '../../store/storeContext';
import { StoreAction } from '../../store/storeReducer';

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
      [StatusFilterAll]: applications.length,
    },
  );

  const handleStatusClick = (status) =>
    dispatch({ type: StoreAction.setStatusFilter, statusFilter: status });

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
      {[StatusFilterAll, ...Object.values(ApplicationStatus)].map(
        renderStatusChip,
      )}
    </div>
  );
};
