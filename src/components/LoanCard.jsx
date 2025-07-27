import './LoanCard.css';

function LoanCard({ title, category, amount, progress, image, urgent }) {
  return (
    <div className="loan-card">
      <div className="image-wrapper">
        <img src={image} alt={title} />
        {urgent && <span className="urgent-badge">فوری</span>}
      </div>

      <div className="card-info">
        <p className="category">{category}</p>
        <h3 className="title">{title}</h3>
        <p className="amount">{amount.toLocaleString()} تومان</p>
      </div>

      <div className="card-footer">
        <button className="arrow-btn">←</button>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}>
            {progress}٪
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoanCard;
