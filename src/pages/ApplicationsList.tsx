import type { Location } from 'react-router';
import { useLocation } from 'react-router';
import { AddEditApplicationModal } from '../components/list/AddEditApplicationModal';
import { ApplicationsStatusFilter } from '../components/list/ApplicationsStatusFilter';
import { ApplicationsTable } from '../components/list/ApplicationsTable';
import { useStore, useStoreDispatch } from '../store/storeContext';
import { StoreAction } from '../store/storeReducer';

export const ApplicationsList = () => {
  const { isApplicationActionModalOpen } = useStore();
  const dispatch = useStoreDispatch();

  const location: Location<{ deletedApplicationId?: string } | null> =
    useLocation();

  const deletedApplicationId = location.state?.deletedApplicationId;

  const handleToggleApplicationActionModal = () =>
    dispatch({ type: StoreAction.toggleApplicationActionModal });

  return (
    <div>
      {deletedApplicationId && (
        <div>Recently deleted application: {deletedApplicationId}</div>
      )}
      <button onClick={handleToggleApplicationActionModal}>
        Add Application
      </button>
      {isApplicationActionModalOpen && <AddEditApplicationModal />}
      <ApplicationsStatusFilter />
      <ApplicationsTable />
    </div>
  );
};
