/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0b0b0d",
          card: "#161619",
          cardHover: "#1f1f24",
          cardBorder: "#27272c",
          accent: "#ff5533",
          accentHover: "#ff6c4a",
          text: "#ffffff",
          textMuted: "#8e8e93",
          pillBg: "#222226"
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Outfit', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
