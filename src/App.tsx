import { Navigate, Route, Routes } from 'react-router';
import './App.css';
import { AppLayout } from './layouts/AppLayout';
import { ApplicationDetails } from './pages/ApplicationDetails';
import { ApplicationsList } from './pages/ApplicationsList';
import { NotFound } from './pages/NotFound';
import { Settings } from './pages/Settings';

export const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<ApplicationsList />} />
        <Route path="settings" element={<Settings />} />
        <Route path="applications" element={<Navigate to="/" replace />} />
        <Route path="applications/:id" element={<ApplicationDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
