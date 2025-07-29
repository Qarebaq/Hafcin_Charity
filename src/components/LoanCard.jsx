import './LoanCard.css';
//این ها همون اون کارت های صفحه اصلی هستند که وام های درجریان رو میگفت 
function LoanCard({ title, category, amount, progress, image, urgent }) {
  return (
    <div style={{width: '300px'}} className="loan-card">
      <div className="image-wrapper">
        <img src={image} alt={title} />
        {urgent && <span className="urgent-badge">فوری</span>}
      </div>

      <div className="card-info">
        <p className="category">{category}</p>
        <p className="title" style={{color: 'black' , fontSize: '18px' , textAlign: 'right'}}>{title}</p>
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
