/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        muted: {
          DEFAULT: '#f5f7fb'
        },
        'muted-foreground': '#6b7280'
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}
