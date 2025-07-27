import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      navigate('/dashboard');
    } else {
      alert('نام کاربری یا رمز عبور اشتباه است');
    }
  };

  return (

    <div style={{ padding: '2rem' }}>
      <h2>ورود</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>نام کاربری:</label><br/>
          <input value={username} onChange={e => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>رمز عبور:</label><br/>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <button type="submit">ورود</button>
      </form>
    </div>
  );
}

export default Login;
