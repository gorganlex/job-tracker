import { Navigate, Outlet, useLocation } from 'react-router';

const isLoggedIn = false; // fake flag, flip it to test

export const ProtectedRoute = () => {
  const location = useLocation();

  console.log(location);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
};
