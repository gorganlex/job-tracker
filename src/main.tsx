import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { StoreContextProvider } from './store/StoreContextProvider';
import { BrowserRouter } from 'react-router';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw Error('No root element');
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
