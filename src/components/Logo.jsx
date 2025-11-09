function Logo({ className = 'h-10 w-10' }) {
  return (
    <img
      src="/logo.png"
      alt="Logo VibeFinder"
      className={`rounded-lg ${className}`}
      width="64"
      height="64"
      loading="eager"
      decoding="async"
    />
  );
}

export default Logo;
