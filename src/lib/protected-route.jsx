// src/lib/ProtectedRoute.jsx
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/hooks/use-auth';

export function ProtectedRoute() {
  const { auth } = useAuth(); // or `user`, depending on your context

  if (!auth) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />; // renders nested routes
}
