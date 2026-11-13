import { AddEditApplicationModal } from '../components/list/AddEditApplicationModal';
import { ApplicationsStatusFilter } from '../components/list/ApplicationsStatusFilter';
import { ApplicationsTable } from '../components/list/ApplicationsTable';
import { useStore, useStoreDispatch } from '../store/storeContext';
import { StoreAction } from '../store/storeReducer';

export const ApplicationsList = () => {
  const { isApplicationActionModalOpen } = useStore();
  const dispatch = useStoreDispatch();

  const handleToggleApplicationActionModal = () =>
    dispatch({ type: StoreAction.toggleApplicationActionModal });

  return (
    <div>
      <button onClick={handleToggleApplicationActionModal}>
        Add Application
      </button>
      {isApplicationActionModalOpen && <AddEditApplicationModal />}
      <ApplicationsStatusFilter />
      <ApplicationsTable />
    </div>
  );
};
