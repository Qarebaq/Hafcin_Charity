import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(u => u.username === username)) {
      alert('این نام کاربری قبلا ثبت شده است');
      return;
    }
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('ثبت نام موفقیت آمیز بود');
    navigate('/login');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>ثبت نام</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>نام کاربری:</label><br/>
          <input value={username} onChange={e => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>رمز عبور:</label><br/>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <button type="submit">ثبت نام</button>
      </form>
    </div>
  );
}

export default Register;
