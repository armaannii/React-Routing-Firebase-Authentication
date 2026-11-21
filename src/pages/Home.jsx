import { Link } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

export default function Home() {
  const { currentUser } = useAuth();

  return (
    <div className="page-container">
      <h1>Welcome to Home Page</h1>
      <p>This is a simple React application demonstrating React Router and Firebase Authentication.</p>
      
      <div className="home-status">
        {currentUser ? (
          <p>
            You are logged in as <strong>{currentUser.email}</strong>. Visit your{' '}
            <Link to="/dashboard">Dashboard</Link> or <Link to="/profile">Profile</Link>.
          </p>
        ) : (
          <p>
            Please <Link to="/login">Login</Link> or <Link to="/register">Register</Link> to access protected routes like Dashboard and Profile.
          </p>
        )}
      </div>
    </div>
  );
}
