import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoanList from '../components/LoanList';
import ReportList from '../components/ReportList';
import DonationForm from '../components/DonationForm';

import './Home.css';

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
    
          <span>حمایت</span>
        </button>
      

      </div>

    </section>
          <LoanList />
       <ReportList />

    <div className='Quran' >
      <h3 className='AyeQuran'>
        مَثَلُ الَّذِينَ يُنْفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنْبَتَتْ سَبْعَ سَنَابِلَ فِي كُلِّ سُنْبُلَةٍ مِائَةُ حَبَّةٍ وَاللَّهُ يُضَاعِفُ لِمَنْ يَشَاءُ وَاللَّهُ وَاسِعٌ عَلِيمٌ ﴿۲۶۱﴾
      </h3>

      <h4 className='TarjomeAye'>
        ‌مَثَلِ [انفاقاتِ] کسانى که اموالشان را در راه خدا انفاق مى‌کنند، مانند مَثَل دانه‌ سنبلى است که هفت خوشه برویاند و در هر خوشه صد دانه باشد (پاداش انفاق هفتصد برابر است) و خدا براى هر کس که بخواهد [پاداش را] چند برابر می‌کند، و خدا وسعت بخش داناست.
      </h4>

      <h4 className='soore'>سوره بقره؛ آیه ۲۶۱</h4>
    </div>
          <DonationForm />

    <Footer />
    
    </div>
  );
}

export default Home;
