/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          dark: '#0e1a35',    // Sidebar background
          blue: '#1a365d',    // Active calendar border
          blueBg: '#e2e8f0',  // Fixed lecture bg (slate-200)
          blueBorder: '#1e293b', // Fixed lecture border (slate-800)
          greenBg: '#dcfce7', // Multi-purpose bg (green-100)
          greenBorder: '#22c55e', // Multi-purpose border (green-500)
          goldBg: '#fef3c7',   // Exceptional bg (amber-100)
          goldBorder: '#d97706', // Exceptional border (amber-600)
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
