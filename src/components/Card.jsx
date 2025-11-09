function Card({ children, className = '' }) {
  return (
    <div className={`rounded-2xl border border-slate-100 bg-white p-8 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export default Card;
