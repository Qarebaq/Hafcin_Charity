import './ReportCard.css';

function ReportCard({ title, subtitle, image }) {
  return (
    <div className="report-card">
      <img src={image} alt={title} />
      <div className="report-footer">
        <div className="report-text">
          <div className="report-title">{title}</div>
          <div className="report-subtitle">{subtitle}</div>
        </div>
        <span className="arrow">‹</span>
      </div>
    </div>
  );
}

export default ReportCard;
