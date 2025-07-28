import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import "./Register.css"
import "./Login.css"
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
    <div>
    <div className="login-container">
    <img style={{width: '100%'}} src="/assests/logo.png" alt="لوگو" className="logo" />

      <div className="tabs">
        <button className="tab active">وام‌دهنده</button>
        <button className="tab">گروه جهادی</button>
      </div>

      <form className="login-form" >
        <h2>ثبت نام</h2>
        <label>شماره تماس</label>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required

          placeholder='09121232453'
        />

        <button type="submit" className="login-button">
          <span>ورود</span>
          <span className="arrow">←</span>
        </button>
      </form>


    </div>
</div>
  );
}

export default Register;
