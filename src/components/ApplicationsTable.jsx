import { ApplicationRow } from './ApplicationRow';
import { NoApplications } from './NoApplications';

export const ApplicationsTable = ({ applications }) => {
  return applications.length ? (
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
        {applications.map((application) => (
          <ApplicationRow key={application.id} application={application} />
        ))}
      </tbody>
    </table>
  ) : (
    <NoApplications />
  );
};
