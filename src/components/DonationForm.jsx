// DonationForm.jsx
import React from 'react';
import './DonationForm.css';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaInstagram,
  FaTelegramPlane,
  FaHeart
} from 'react-icons/fa';


export default function DonationForm() {
  return (
    <div className="donation-container">
      <h1 className="title">حمایت از ما</h1>

      <div className="form-grid">
        <div className="form-section">
          <div className="row">
            <div className="input-group">
              <label>نام و نام خانوادگی</label>
              <input type="text" placeholder="علی احمدی" />
            </div>
            <div className="input-group">
              <label>شماره تماس</label>
              <input type="text" placeholder="09356102510" />
            </div>
          </div>

          <div className="row">
        <button className="tab active">کمک نقدی</button>
        <button className="tab">کمک غیر نقدی</button>          </div>
    
          <textarea className="description-box" />
        </div>

        <div className="side-section">
          <div className="card-box">
            <p>شماره کارت</p>
            <div className="card-number">
              <button className="icon-button">🔗</button>

              <span>۶۲۱۹-۸۶۱۹-۰۱۱۰-۵۹۳۱</span>
                        <img style={{width: '40px'}} src="/assests/images/bank.png" alt="لوگو" className="logo" />


            </div>
          </div>
<br></br>
          <div className="card-box">
            <p>ما را به دیگران معرفی کنید</p>
            <div className="share-row">
                <FaInstagram />
                <FaHeart />
                <FaTelegramPlane />
        
              <div className="share-input">
                <input defaultValue="hafcin.ir" />
                <button className="icon-button">🔗</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="submit-button">⬅ ارسال</button>
    </div>
  );
}