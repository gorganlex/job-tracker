import {
  ApplicationStatus,
  StatusFilterAll,
} from '../../data/applicationStatus';
import { useStore, useStoreDispatch } from '../../store/storeContext';
import { StoreAction } from '../../store/storeReducer';
import type { StatusFilter } from '../../data/applicationStatus';

const filterStatuses: StatusFilter[] = [
  StatusFilterAll,
  ...Object.values(ApplicationStatus),
];

export const ApplicationsStatusFilter = () => {
  const { applications, statusFilter } = useStore();
  const dispatch = useStoreDispatch();

  const statusCountMap = applications.reduce<Record<StatusFilter, number>>(
    (acc, app) => {
      acc[app.status] += 1;

      return acc;
    },
    {
      [StatusFilterAll]: applications.length,
      [ApplicationStatus.Applied]: 0,
      [ApplicationStatus.Screening]: 0,
      [ApplicationStatus.Interview]: 0,
      [ApplicationStatus.Offer]: 0,
      [ApplicationStatus.Rejected]: 0,
      [ApplicationStatus.Withdrawn]: 0,
    },
  );

  const handleStatusClick = (status: StatusFilter) =>
    dispatch({ type: StoreAction.setStatusFilter, statusFilter: status });

  const renderStatusChip = (status: StatusFilter) => (
    <button
      style={statusFilter === status ? { backgroundColor: 'lightgray' } : {}}
      key={status}
      disabled={!statusCountMap[status]}
      onClick={() => handleStatusClick(status)}
    >
      {status} {statusCountMap[status]}
    </button>
  );

  return <div>{filterStatuses.map(renderStatusChip)}</div>;
};
