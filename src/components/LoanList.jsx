import LoanCard from './LoanCard';
import './LoanList.css';
//  wirth urgent true or false you can add foori tag on cards

const loans = [
  {
    title: 'خرید لوازم التحریر',
    category: 'اشتغال',
    amount: 22900000,
    progress: 74,
    urgent: false,
    image: '/assests/images/temp.jpg',
  },
  {
    title: 'خرید لوازم التحریر',
    category: 'پزشکی',
    amount: 2446000,
    progress: 70,
    urgent: false,
    image: '/assests/images/temp.jpg',
  },
  {
    title: 'خرید لوازم التحریر',
    category: 'پزشکی',
    amount: 53400000,
    progress: 30,
    urgent: true,
    image: '/assests/images/temp.jpg',
  },
    {
    title: 'خرید لوازم التحریر',
    category: 'اشتغال',
    amount: 4600000,
    progress: 50,
    urgent: true,
    image: '/assests/images/temp.jpg',
  },
  
  // Add more as needed
];

function LoanList() {
  return (
    <div className="loan-list-wrapper">
      <h2 className="section-title">وام‌های در جریان</h2>
      <div className="loan-grid">
        {loans.map((loan, index) => (
          <LoanCard key={index} {...loan} />
        ))}
      </div>
      <button className="see-all-btn">+ دیدن همه</button>
    </div>
  );
}

export default LoanList;
