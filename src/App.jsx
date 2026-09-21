import { useState } from 'react';
import './App.css';
import { seedApplications } from './data/seedApplications';
import { ApplicationsTable } from './components/list/ApplicationsTable';
import { ApplicationStatusFilterAll } from './data/applicationStatus';
import { ApplicationsStatusFilter } from './components/list/ApplicationsStatusFilter';

export const App = () => {
  const [applications, setApplications] = useState([...seedApplications]);
  const [selectedStatus, setSelectedStatus] = useState(
    ApplicationStatusFilterAll,
  );

  const filteredApplications =
    selectedStatus === ApplicationStatusFilterAll
      ? applications
      : applications.filter((app) => app.status === selectedStatus);

  const handleStatusClick = (status) => setSelectedStatus(status);

  const handleDeleteApplication = (id) => {
    setApplications((applications) =>
      applications.filter((app) => app.id !== id),
    );
  };

  return (
    <div>
      <ApplicationsStatusFilter
        applications={applications}
        selectedStatus={selectedStatus}
        onStatusClick={handleStatusClick}
      />
      <ApplicationsTable
        applications={filteredApplications}
        onDeleteApplication={handleDeleteApplication}
      />
    </div>
  );
};

export default App;
