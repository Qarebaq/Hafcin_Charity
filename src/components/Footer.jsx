import React from 'react';
import './Footer.css';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaInstagram,
  FaTelegramPlane,
  FaHeart
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-box logo-box">
        <img style={{width: '100%' , padding: '10px' , margin:'34px'}} src="/assests/enamad.jpg" alt="لوگو" className="logo" />
      </div>

      <div className="contact-group">
        <div className="footer-box contact-box">
          <div className="contact-item"><FaPhoneAlt /> <span>۰۹۳۵۶۱۰۲۱۵۰</span></div>
          <div className="contact-item"><FaEnvelope /> <span>hafcin@gmail.com</span></div>
          <div className="contact-item"><FaMapMarkerAlt /> <span>شهرک غرب، بلوار خوردین، توحید دوم، پلاک ۲۱، واحد ۸</span></div>
          <div className="contact-item"><FaCalendarAlt /> <span>شنبه تا چهارشنبه: ۱۱ الی ۱۷</span></div>
        </div>

        <div className="footer-box social-box">
          <p className="social-title">شبکه‌های اجتماعی</p>
          <div className="social-icons">
            <FaInstagram />
            <FaHeart />
            <FaTelegramPlane />
          </div>
        </div>
      </div>

      {/* چپ: آخرین مطالب */}
      <div className="footer-box posts-box">
        <p className="section-title">آخرین مطالب</p>
        <ul>
          <li>کمپین جمع‌آوری لوازم‌التحریر</li>
          <li>اطعام نیازمندان در عید غدیر</li>
          <li>غیره</li>
          <li>گزارش</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
