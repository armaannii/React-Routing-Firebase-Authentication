import { useAuth } from '../context/useAuth';

export default function Dashboard() {
  const { currentUser } = useAuth();

  return (
    <div className="page-container">
      <h1>Welcome to Dashboard</h1>
      <div className="card">
        <p>This is a protected page accessible only to authenticated users.</p>
        <p>
          <strong>Logged-in User Email:</strong> {currentUser?.email}
        </p>
      </div>
    </div>
  );
}
