import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css'

function Home() {
  return (

    <div>
      <Navbar />
    <section className="hero">
      <div className="hero-image-placeholder"></div>
      <div className="hero-text">
        <h1>کمک برای ساختن <br /> زندگی‌های زیباتر</h1>
        <p>ما از طریق کمک‌ها و حمایت‌های شما زندگی زیباتری را به خانواده‌های تحت پوشش‌مان هدیه می‌کنیم</p>
        <button className="hero-btn">
          {/* <FaArrowLeft /> */}
          <span>حمایت</span>
        </button>
      </div>
    </section>
    
    <Footer />
    
    </div>
  );
}

export default Home;
