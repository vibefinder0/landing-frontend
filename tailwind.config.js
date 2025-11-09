/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'vf-primary': '#2563eb',
        'vf-primary-dark': '#1d4ed8',
        'vf-accent': '#22d3ee'
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif'
        ]
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(37, 99, 235, 0.35)'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      backgroundImage: {
        'vf-gradient': 'linear-gradient(135deg, #2563eb 0%, #22d3ee 100%)'
      }
    }
  },
  plugins: []
};
