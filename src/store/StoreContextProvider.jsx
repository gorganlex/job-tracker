import { useReducer } from 'react';
import { storeReducer } from './storeReducer';
import { StoreContext, StoreDispatchContext } from './storeContext';
import { seedApplications } from '../data/seedApplications';
import { ApplicationStatusFilterAll } from '../data/applicationStatus';

const storeInitialState = {
  applications: [...seedApplications],
  isApplicationActionModalOpen: false,
  applicationInEditId: null,
  statusFilter: ApplicationStatusFilterAll,
};

export const StoreContextProvider = ({ children }) => {
  const [store, dispatch] = useReducer(storeReducer, storeInitialState);

  return (
    <StoreContext value={store}>
      <StoreDispatchContext value={dispatch}>{children}</StoreDispatchContext>
    </StoreContext>
  );
};
