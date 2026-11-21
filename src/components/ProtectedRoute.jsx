import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

export default function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();
  const location = useLocation();

  if (!currentUser) {
    // Redirect unauthenticated user to the login page, remembering the location they tried to access
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
