/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#5CB030',
          dark: '#4a9426',
          light: '#eef8e6',
        },
        ink: '#1a1a1a',
        inkdark: '#f1f5f9',
        muted: '#6b7280',
        'muted-dark': '#9ca3af',
        'bg-dark': '#0f172a',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
