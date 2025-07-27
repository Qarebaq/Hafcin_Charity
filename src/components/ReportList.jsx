import ReportCard from './ReportCard';
import './ReportList.css';

const reports = [
  {
    title: 'گزارش تصویری خرید و اهدا',
    subtitle: 'لوازم التحریر',
    image: '/assests/images/temp.jpg',
  },
  {
    title: 'گزارش تصویری خرید و اهدا',
    subtitle: 'لوازم التحریر',
    image: '/assests/images/temp.jpg',
  },
  {
    title: 'گزارش تصویری خرید و اهدا',
    subtitle: 'لوازم التحریر',
    image: '/assests/images/temp.jpg',
  },
];

function ReportList() {
  return (
    <div className="report-list-wrapper">
      <h2 className="report-section-title">گزارش‌ها</h2>
      <div className="report-grid">
        {reports.map((report, index) => (
          <ReportCard key={index} {...report} />
        ))}
      </div>
    </div>
  );
}

export default ReportList;
