import { useReducer, type PropsWithChildren } from 'react';
import { seedApplications } from '../data/seedApplications';
import { StoreContext, StoreDispatchContext } from './storeContext';
import type { StoreState } from './storeReducer';
import { storeReducer } from './storeReducer';

const storeInitialState: StoreState = {
  applications: [...seedApplications],
  isApplicationActionModalOpen: false,
  applicationInEditId: null,
};

export const StoreContextProvider = ({ children }: PropsWithChildren) => {
  const [store, dispatch] = useReducer(storeReducer, storeInitialState);

  return (
    <StoreContext value={store}>
      <StoreDispatchContext value={dispatch}>{children}</StoreDispatchContext>
    </StoreContext>
  );
};
