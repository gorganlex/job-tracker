import { createContext, useContext, type Dispatch } from 'react';
import type { StoreState, StoreActionType } from './storeReducer';

export const StoreContext = createContext<StoreState | null>(null);
export const StoreDispatchContext =
  createContext<Dispatch<StoreActionType> | null>(null);

export const useStore = (): StoreState => {
  const store = useContext(StoreContext);

  if (!store) {
    throw Error('No store context');
  }

  return store;
};

export const useStoreDispatch = () => {
  const dispatch = useContext(StoreDispatchContext);

  if (!dispatch) {
    throw Error('No dispatch context');
  }

  return dispatch;
};
