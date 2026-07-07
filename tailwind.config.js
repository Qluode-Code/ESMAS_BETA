/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins-Regular", "System"],
        medium: ["Poppins-Medium", "System"],
        semibold: ["Poppins-SemiBold", "System"],
        bold: ["Poppins-Bold", "System"],
      },
      colors: {
        brand: "#6a688f",
        "brand-strong": "#a5a4ae",
        surface: "#ffffff",
        "surface-muted": "#f8fafc",
        background: "#f8fafc",
        text: "#0f172a",
        "text-muted": "#475569",
        primary: "#6366f1",
        "primary-soft": "#e0e7ff",
        success: "#34d399",
        danger: "#ef4444",
        slate: {
          100: "#f1f5f9",
          200: "#e2e8f0",
        },
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.08)",
        card: "0 10px 25px rgba(15, 23, 42, 0.08)",
      },
      borderRadius: {
        xl: "1rem",
      },
    },
  },
};
