
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyber-cyan': '#22d3ee',
        'cyber-indigo': '#818cf8'
      },
      backgroundImage: {
        'radial-space':
          'radial-gradient(circle at 50% 30%, rgba(34,211,238,0.18), rgba(15,23,42,1) 70%)'
      },
      boxShadow: {
        'neon-cyan': '0 0 18px rgba(34,211,238,0.55)'
      }
    }
  },
  plugins: []
}
