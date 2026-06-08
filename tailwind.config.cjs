/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        app: {
          bg: '#F6F1E7',
          surface: '#FFF9EE',
          surfaceMuted: '#E9DDC8',
          primary: '#D96B32',
          primaryHover: '#C45D2B',
          primarySoft: '#F2B279',
          secondary: '#2F6F5E',
          secondaryHover: '#285F51',
          secondarySoft: '#BFD8C8',
          accent: '#F2C94C',
          accentSoft: '#F8E6A0',
          text: '#2B241C',
          muted: '#7A6D5E',
          inverse: '#FFF9EE',
          border: '#D8C8B2',
          error: '#B94A3A',
          success: '#4F8A5B',
        },
      },
      boxShadow: {
        soft: '0 18px 50px rgba(70, 47, 28, 0.12)',
        glow: '0 0 0 1px rgba(217, 107, 50, 0.1), 0 18px 60px rgba(47, 111, 94, 0.12)',
      },
      backgroundImage: {
        'app-radial':
          'radial-gradient(circle at top left, rgba(242, 178, 121, 0.26), transparent 28%), radial-gradient(circle at top right, rgba(191, 216, 200, 0.4), transparent 24%), linear-gradient(180deg, #fbf6ec 0%, #f6f1e7 48%, #f2ead9 100%)',
      },
    },
  },
  plugins: [],
};
