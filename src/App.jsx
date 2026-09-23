import { useState } from 'react';
import './App.css';
import { seedApplications } from './data/seedApplications';
import { ApplicationsTable } from './components/list/ApplicationsTable';
import { ApplicationStatusFilterAll } from './data/applicationStatus';
import { ApplicationsStatusFilter } from './components/list/ApplicationsStatusFilter';
import { AddApplicationModal } from './components/list/AddApplicationModal';

export const App = () => {
  const [applications, setApplications] = useState([...seedApplications]);
  const [selectedStatus, setSelectedStatus] = useState(
    ApplicationStatusFilterAll,
  );
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const filteredApplications =
    selectedStatus === ApplicationStatusFilterAll
      ? applications
      : applications.filter((app) => app.status === selectedStatus);

  const toggleAddApplicationModal = () => setIsAddModalOpen((open) => !open);

  const handleAddApplication = (application) => {
    setApplications((applications) => [...applications, application]);
    toggleAddApplicationModal();
  };

  const handleStatusClick = (status) => setSelectedStatus(status);

  const handleDeleteApplication = (id) => {
    setApplications((applications) =>
      applications.filter((app) => app.id !== id),
    );
  };

  const handleFavoriteApplication = (id) => {
    setApplications((applications) =>
      applications.map((application) =>
        application.id === id
          ? { ...application, favorite: !application.favorite }
          : application,
      ),
    );
  };

  return (
    <div>
      <button onClick={toggleAddApplicationModal}>Add Application</button>
      {isAddModalOpen && (
        <AddApplicationModal
          onClose={toggleAddApplicationModal}
          onAddApplication={handleAddApplication}
        />
      )}
      <ApplicationsStatusFilter
        applications={applications}
        selectedStatus={selectedStatus}
        onStatusClick={handleStatusClick}
      />
      <ApplicationsTable
        applications={filteredApplications}
        onFavoriteApplication={handleFavoriteApplication}
        onDeleteApplication={handleDeleteApplication}
      />
    </div>
  );
};

export default App;
