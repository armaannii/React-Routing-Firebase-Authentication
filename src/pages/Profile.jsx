import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

export default function Profile() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  }

  return (
    <div className="page-container">
      <h1>Profile Page</h1>
      <div className="card">
        <p>This is your protected profile page.</p>
        <p>
          <strong>Logged-in User Email:</strong> {currentUser?.email}
        </p>
        <div style={{ marginTop: '20px' }}>
          <button type="button" onClick={handleLogout} className="btn-logout">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
