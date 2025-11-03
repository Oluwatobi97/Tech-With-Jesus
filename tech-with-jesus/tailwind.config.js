// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgba(255, 255, 255, 0.7)", // subtle glass effect base
        surface: "rgba(255, 255, 255, 0.15)", // deeper glass panel
        border: "rgba(255, 255, 255, 0.25)", // glass border tone
        textPrimary: "#1E1E1E", // rich dark gray
        textSecondary: "#6B7280", // cool muted gray
        accent: "#00A0B4", // cool cyan–teal (main accent)
        accentHover: "#007AFF", // professional blue for hovers
        secondaryAccent: "#208468", // deep teal alternative
        neutral: "#E5E7EB", // light gray background areas
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },
      boxShadow: {
        glass: "0 4px 30px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
