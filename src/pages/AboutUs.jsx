import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoanList from '../components/LoanList';
import ReportList from '../components/ReportList';
import DonationForm from '../components/DonationForm';

import './AboutUs.css';

function AboutUs() {
  return (

    <div>
      <Navbar />
    <section className="hero">
      <img src='/assests/images/Aboutus.png' className="hero-image-placeholder"></img>
      <div className="hero-text">
        <h1 style={{color: '#5b3f84' , marginRight: '15px'}}>درباره ما</h1>

<h3 style={{fontFamily: 'Vazirmatn' , margin: '15px' , color: '#3C2E44'}}>
هفسین یه گروه نیکوکاریه که در زمینه های مختلف قدم هایی برای حل مشکلات بر میداره. اینجا همه آماده کمک اند برای ساختن آینده ای بهتر

</h3>


      

      </div>

    </section>

<div className='AboutUs_txt' >
<h3  >
ما می‌دونیم شما اونقدر مهربونید که می‌تونید امید رو تو قلب دانش‌آموزان محروم ایجاد کنید. پس با ما همراه شید.
خیریه نیکان ماموت کمپین #مهر_مهربانی_میخواهد رو با هدف تهیه و توزیع حدود 2500 بسته لوازم التحریر و کیف نو، مخصوص دانش‌آموزان مشتاق به تحصیل مناطق محروم کشور راه اندازی کرده و منتظر سخاوت همه شما عزیزان هستیم تا یه بار دیگه ثابت کنیم مردم ما توی مهربونی همتا ندارن.
مبلغ میانگین هر بسته لوازم التحریر 400 هزار تومان است که شما با هر مبلغ می‌توانید از کودکان سرزمینمان حمایت کنید. هر برگ سبزی از سوی شما ارزشمند است.
ما می‌دونیم شما اونقدر مهربونید که می‌تونید امید رو تو قلب دانش‌آموزان محروم ایجاد کنید. پس با ما همراه شید.
خیریه نیکان ماموت کمپین #مهر_مهربانی_میخواهد رو با هدف تهیه و توزیع حدود 2500 بسته لوازم التحریر و کیف نو، مخصوص دانش‌آموزان مشتاق به تحصیل مناطق محروم کشور راه اندازی کرده و منتظر سخاوت همه شما عزیزان هستیم تا یه بار دیگه ثابت کنیم مردم ما توی مهربونی همتا ندارن.
مبلغ میانگین هر بسته لوازم التحریر 400 هزار تومان است که شما با هر مبلغ می‌توانید از کودکان سرزمینمان حمایت کنید. هر برگ سبزی از سوی شما ارزشمند است.
</h3>
 </div>

          <DonationForm />


          <LoanList />


    <Footer />
    
    </div>
  );
}

export default AboutUs;
