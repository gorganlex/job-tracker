import type { StatusFilter } from '../../data/applicationStatus';
import {
  ApplicationStatus,
  StatusFilterAll,
} from '../../data/applicationStatus';
import { useStatusFilter } from '../../hooks/useStatusFilter';
import { useStore } from '../../store/storeContext';

const filterStatuses: StatusFilter[] = [
  StatusFilterAll,
  ...Object.values(ApplicationStatus),
];

export const ApplicationsStatusFilter = () => {
  const { applications } = useStore();
  const [statusFilter, setStatusFilter] = useStatusFilter();

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

  const renderStatusChip = (status: StatusFilter) => (
    <button
      style={statusFilter === status ? { backgroundColor: 'lightgray' } : {}}
      key={status}
      disabled={!statusCountMap[status]}
      onClick={() => setStatusFilter(status)}
    >
      {status} {statusCountMap[status]}
    </button>
  );

  return <div>{filterStatuses.map(renderStatusChip)}</div>;
};
