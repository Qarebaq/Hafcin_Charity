import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  return (
    
    <div dir="rtl" style={{ padding: '2rem' , fontFamily: 'Vazirmatn, sans-serif' }}>
      <Navbar />
      
      <h2 style={{  color: 'purple'}}>کمک برای ساختن زندگی های زیباتر</h2>
      <p>ما از طریق کمک ها و حمایت های شما زندگی زیباتری را به خانواده های تحت پوششمان هدیه میکنیم</p>
      <Footer />
    </div>
  );
}

export default Home;
