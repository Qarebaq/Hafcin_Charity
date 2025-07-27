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
    <div className="login-container">
    <img style={{width: '100%'}} src="/assests/logo.png" alt="لوگو" className="logo" />

      <div className="tabs">
        <button className="tab active">وام‌دهنده</button>
        <button className="tab">گروه جهادی</button>
      </div>

      <form className="login-form" onSubmit={handleLogin}>
        <h2>ورود</h2>

        <label>نام کاربری</label>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />

        <label>رمز ورود</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="login-button">
          <span>ورود</span>
          <span className="arrow">←</span>
        </button>
      </form>

      <div className="register-link">
        حساب کاربری ندارید؟ از طریق این لینک <a href="/signup">ثبت‌نام</a> کنید.
      </div>
    </div>
  );
}

export default Login;
