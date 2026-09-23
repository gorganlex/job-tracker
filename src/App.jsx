import { useState } from 'react';
import './App.css';
import { seedApplications } from './data/seedApplications';
import { ApplicationsTable } from './components/list/ApplicationsTable';
import { ApplicationStatusFilterAll } from './data/applicationStatus';
import { ApplicationsStatusFilter } from './components/list/ApplicationsStatusFilter';
import { AddEditApplicationModal } from './components/list/AddEditApplicationModal';

export const App = () => {
  const [applications, setApplications] = useState([...seedApplications]);
  const [selectedStatus, setSelectedStatus] = useState(
    ApplicationStatusFilterAll,
  );
  const [isAddEditModalOpen, setIsAddEditModalOpen] = useState(false);
  const [applicationInEdit, setApplicationInEdit] = useState();

  const filteredApplications =
    selectedStatus === ApplicationStatusFilterAll
      ? applications
      : applications.filter((app) => app.status === selectedStatus);

  const toggleAddEditApplicationModal = () => {
    if (isAddEditModalOpen) {
      setApplicationInEdit(undefined);
    }

    setIsAddEditModalOpen((open) => !open);
  };

  const handleSubmitApplication = (application) => {
    if (!applicationInEdit) {
      setApplications((applications) => [...applications, application]);
    } else {
      setApplications((applications) =>
        applications.map((app) =>
          app.id === application.id ? application : app,
        ),
      );
    }

    toggleAddEditApplicationModal();
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

  const handleEditApplication = (id) => {
    setApplicationInEdit({
      ...applications.find(({ id: appId }) => appId === id),
    });
    toggleAddEditApplicationModal();
  };

  return (
    <div>
      <button onClick={toggleAddEditApplicationModal}>Add Application</button>
      {isAddEditModalOpen && (
        <AddEditApplicationModal
          application={applicationInEdit}
          onClose={toggleAddEditApplicationModal}
          onSubmitApplication={handleSubmitApplication}
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
        onEditApplication={handleEditApplication}
        onDeleteApplication={handleDeleteApplication}
      />
    </div>
  );
};

export default App;
