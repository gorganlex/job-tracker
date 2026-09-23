import { ApplicationRow } from './ApplicationRow';
import { NoApplications } from './NoApplications';

export const ApplicationsTable = ({
  applications,
  onFavoriteApplication,
  onEditApplication,
  onDeleteApplication,
}) => {
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
          <ApplicationRow
            key={application.id}
            application={application}
            onFavoriteApplication={() => onFavoriteApplication(application.id)}
            onEditApplication={() => onEditApplication(application.id)}
            onDeleteApplication={() => onDeleteApplication(application.id)}
          />
        ))}
      </tbody>
    </table>
  ) : (
    <NoApplications />
  );
};
