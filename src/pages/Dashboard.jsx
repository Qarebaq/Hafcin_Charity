import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (!user) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>داشبورد</h2>
      <p>خوش آمدید!</p>
      <button onClick={handleLogout}>خروج</button>
    </div>
  );
}

export default Dashboard;
