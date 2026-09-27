import './App.css';
import { ApplicationsTable } from './components/list/ApplicationsTable';
import { ApplicationsStatusFilter } from './components/list/ApplicationsStatusFilter';
import { AddEditApplicationModal } from './components/list/AddEditApplicationModal';
import { useStore, useStoreDispatch } from './store/storeContext';
import { StoreActions } from './store/storeReducer';

export const App = () => {
  const { isApplicationActionModalOpen } = useStore();
  const dispatch = useStoreDispatch();

  const handleToggleApplicationActionModal = () =>
    dispatch({ type: StoreActions.toggleApplicationActionModal });

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

export default App;
