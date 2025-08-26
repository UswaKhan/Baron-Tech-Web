module.exports = {
  content: ['./index.html'],
  safelist: [
    'w-[12%]',
    'w-[20%]',
    'w-[40%]'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#21ace3',
        'secondary': '#e4f7ff',
        'section-bg': '#0b1a2d',
        'section-heading': '#ffffff',
        'section-description': '#a5c6d6',
        'section-accent': '#4ce1ff',
        'section-line': '#35d2ff',
        'section-btn-hover': '#28c7d7',
        'section-btn-border': '#d2f7ff',
        'logo-blue': ['#19b4f1'],
        'dark-blue': ['#0B1A2D'],
        'dark-logo': ["#21ace3"],
        'light-blue': ["#e4f7ff"]
    },
    fontFamily: {
        sans: ['Mona-Sans', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
  },
},
  plugins: [],
};
