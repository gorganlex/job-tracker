import { createContext, useContext } from 'react';

export const StoreContext = createContext(null);
export const StoreDispatchContext = createContext(null);

export const useStore = () => useContext(StoreContext);
export const useStoreDispatch = () => useContext(StoreDispatchContext);
