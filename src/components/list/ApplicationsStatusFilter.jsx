import {
  ApplicationStatus,
  ApplicationStatusFilterAll,
} from '../../data/applicationStatus';

export const ApplicationsStatusFilter = ({
  applications,
  selectedStatus,
  onStatusClick,
}) => {
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

  const renderStatusChip = (status) => (
    <button
      style={selectedStatus === status ? { backgroundColor: 'lightgray' } : {}}
      key={status}
      disabled={!statusCountMap[status]}
      onClick={() => onStatusClick(status)}
    >
      {status} {statusCountMap[status] || 0}
    </button>
  );

  return (
    <div>
      {renderStatusChip(ApplicationStatusFilterAll)}
      {Object.values(ApplicationStatus).map((status) =>
        renderStatusChip(status),
      )}
    </div>
  );
};
