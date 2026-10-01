import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { StoreContextProvider } from './store/StoreContextProvider';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw Error('No root element');
}

createRoot(rootElement).render(
  <StrictMode>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </StrictMode>,
);
