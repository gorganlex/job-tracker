import { useReducer, type PropsWithChildren } from 'react';
import { storeReducer } from './storeReducer';
import type { StoreState } from './storeReducer';
import { StoreContext, StoreDispatchContext } from './storeContext';
import { seedApplications } from '../data/seedApplications';
import { StatusFilterAll } from '../data/applicationStatus';

const storeInitialState: StoreState = {
  applications: [...seedApplications],
  isApplicationActionModalOpen: false,
  applicationInEditId: null,
  statusFilter: StatusFilterAll,
};

export const StoreContextProvider = ({ children }: PropsWithChildren) => {
  const [store, dispatch] = useReducer(storeReducer, storeInitialState);

  return (
    <StoreContext value={store}>
      <StoreDispatchContext value={dispatch}>{children}</StoreDispatchContext>
    </StoreContext>
  );
};
