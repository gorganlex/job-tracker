import { useStore } from '../../store/storeContext';
import { ApplicationRow } from './ApplicationRow';
import { NoApplications } from './NoApplications';
import { StatusFilterAll } from '../../data/applicationStatus';

export const ApplicationsTable = () => {
  const { applications, statusFilter } = useStore();

  const filteredApplications =
    statusFilter === StatusFilterAll
      ? applications
      : applications.filter((app) => app.status === statusFilter);

  return filteredApplications.length ? (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Company</th>
          <th>Role</th>
          <th>Status</th>
          <th>Date Applied</th>
          <th>Location</th>
          <th>Tags</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {filteredApplications.map((application) => (
          <ApplicationRow key={application.id} application={application} />
        ))}
      </tbody>
    </table>
  ) : (
    <NoApplications />
  );
};
