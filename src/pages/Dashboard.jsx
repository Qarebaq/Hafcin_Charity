import React from 'react';
import './Dashboard.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { FaHeart,FaWallet, FaBell, FaEnvelope, FaSignOutAlt, FaFileAlt } from 'react-icons/fa';

function DueDate({ date, shares }) {
  return (
    <div className="due-date">
      <span>سررسید: {date}</span>
      {shares && <span>تعداد سهم: {shares}</span>}
    </div>
  );
}

function Dashboard() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const user = localStorage.getItem('currentUser');
  //   if (!user) {
  //     navigate('/login');
  //   }
  // }, [navigate]);

  // const handleLogout = () => {
  //   localStorage.removeItem('currentUser');
  //   navigate('/login');
  // };

  return (
   <div>
    <Navbar />
    <div style={{maxWidth: '1000px'}} className="dashboard-wrapper">
      <div className="dashboard-content">
        <aside className="sidebar">
          <div className="profile-section">
            <div className="user-info">
              <strong>علی احمدی</strong>
              <span>09123610250</span>
              <span>aliyara.a.84@gmail.com              <button className="edit-button"><img style={{width: '20px'}} src='/assests/edit.jpg' ></img></button></span>

            </div>
          </div>

          <ul className="menu">
            <li style={{fontSize: '16px' , color: '#5e3c78'}}><FaHeart />وام های داده شده </li>
<br />
            <li><FaWallet /> کیف پول</li>
            <br />
            <li><FaFileAlt /> تراکنش‌ها</li>
                        <br />

            <li><FaBell /> پیام‌ها</li>
                        <br />

            <li><FaEnvelope /> تیکت‌ها</li>
          </ul>

          <button className="logout-button" >
            <FaSignOutAlt /> خروج
          </button>
          
        </aside>

        <main className="main-panel">
          <div className="info-box">
            لطفاً برای دادن وام از این طریق اطلاعات خود را تکمیل نمایید.
            <button>تکمیل اطلاعات</button>
          </div>

          <div className="loan-card">
            
            <div className="loan-header">

              <h3 className='txt-sarresid' >اطعام نیازمندان</h3>
              <DueDate date="۱۴۰۲/۰۵/۲۳" shares={2} />
            </div>
            <div className="loan-footer">
              <span>مبلغ: ۱٬۰۰۰٬۰۰۰ تومان</span>
              <button className="details-button">+ جزئیات</button>
            </div>
          </div>

          <div className="loan-card">
            <div className="loan-header">

              <h3 className='txt-sarresid'>اطعام نیازمندان</h3>
              <DueDate date="۱۴۰۲/۰۵/۲۳" shares={3} />
            </div>
            <div className="loan-footer">
              <span>مبلغ: ۱٬۵۰۰٬۰۰۰ تومان</span>
              <button className="details-button">+ جزئیات</button>
            </div>
          </div>
        </main>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;