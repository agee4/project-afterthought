module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      boxShadow: {
        text: "2px 2px 4px rgba(0, 0, 0, 0.1)", // You can adjust the shadow values
        "text-lg": "4px 4px 6px rgba(0, 0, 0, 0.2)", // Another variation for larger text shadow
        "text-xl": "6px 6px 8px rgba(0, 0, 0, 0.3)", // A larger text shadow option
      },
    },
  },
  extend: {
    animation: {
      "move-sideways": "moveSideways 5s infinite alternate",
    },
    keyframes: {
      moveSideways: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(300px)" },
      },
    },
  },
  plugins: [],
}
