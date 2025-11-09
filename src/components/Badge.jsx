function Badge({ children, variant = 'primary', className = '' }) {
  const baseClasses =
    'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold';
  const variants = {
    primary: 'bg-vf-gradient text-white shadow-soft',
    subtle: 'bg-slate-100 text-slate-600',
    outline: 'border border-slate-200 text-slate-600'
  };

  return (
    <span className={`${baseClasses} ${variants[variant] ?? variants.primary} ${className}`}>
      {children}
    </span>
  );
}

export default Badge;
