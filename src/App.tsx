import { Navigate, Route, Routes } from 'react-router';
import './App.css';
import { AppLayout } from './layouts/AppLayout';
import { ApplicationDetails } from './pages/ApplicationDetails';
import { ApplicationsList } from './pages/ApplicationsList';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';
import { ProtectedRoute } from './pages/ProtectedRoute';
import { Settings } from './pages/Settings';

export const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<ApplicationsList />} />
        <Route element={<ProtectedRoute />}>
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="applications" element={<Navigate to="/" replace />} />
        <Route path="applications/:id" element={<ApplicationDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
