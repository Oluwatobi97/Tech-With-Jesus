/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Light Theme Colors
        "light-background": "#F0F7F8", // Smooth, off-white
        "light-surface": "rgba(255, 255, 255, 0.6)", // Glassy surface
        "light-text-primary": "#1A202C", // Dark gray for text
        "light-text-secondary": "#4A5568", // Lighter gray for secondary text
        "light-border": "rgba(0, 160, 180, 0.1)", // Subtle teal border

        // Dark Theme Colors
        "dark-background": "#111827", // Dark gray
        "dark-surface": "rgba(31, 41, 55, 0.3)", // Dark glass
        "dark-text-primary": "#E5E7EB", // Light gray for text
        "dark-text-secondary": "#9CA3AF", // Dimmer gray for secondary text
        "dark-border": "rgba(107, 114, 128, 0.2)", // Subtle gray border

        // Accent Colors (shared)
        accent: "#00A0B4", // Teal
        "accent-hover": "#208468", // Darker teal for hover
      },
      boxShadow: {
        glass: "0 4px 30px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
