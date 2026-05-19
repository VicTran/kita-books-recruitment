/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "primary-fixed-dim": "#a7c8ff",
        "surface-container-highest": "#e3e2df",
        "surface-container-high": "#e9e8e4",
        "outline": "#737780",
        "on-tertiary-fixed-variant": "#802916",
        "on-secondary-fixed-variant": "#5d4201",
        "surface-tint": "#3a5f94",
        "surface-container-lowest": "#ffffff",
        "secondary": "#775a19",
        "surface-bright": "#faf9f5",
        "surface": "#faf9f5",
        "on-tertiary-container": "#ed7b61",
        "on-tertiary": "#ffffff",
        "on-secondary-container": "#785a1a",
        "on-surface": "#1b1c1a",
        "surface-variant": "#e3e2df",
        "background": "#faf9f5",
        "error": "#ba1a1a",
        "tertiary-fixed-dim": "#ffb4a3",
        "tertiary-fixed": "#ffdad2",
        "secondary-container": "#fed488",
        "tertiary": "#420700",
        "primary-container": "#003366",
        "on-surface-variant": "#43474f",
        "tertiary-container": "#651605",
        "on-tertiary-fixed": "#3d0600",
        "inverse-on-surface": "#f2f1ed",
        "primary": "#001e40",
        "surface-dim": "#dbdad6",
        "secondary-fixed": "#ffdea5",
        "surface-container-low": "#f4f4f0",
        "inverse-surface": "#2f312e",
        "surface-container": "#efeeea",
        "on-error": "#ffffff",
        "on-primary-fixed-variant": "#1f477b",
        "secondary-fixed-dim": "#e9c176",
        "on-error-container": "#93000a",
        "on-background": "#1b1c1a",
        "outline-variant": "#c3c6d1",
        "on-primary-fixed": "#001b3c",
        "on-primary-container": "#799dd6",
        "inverse-primary": "#a7c8ff",
        "on-primary": "#ffffff",
        "error-container": "#ffdad6",
        "on-secondary": "#ffffff",
        "on-secondary-fixed": "#261900",
        "primary-fixed": "#d5e3ff"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
      spacing: {
        "margin-desktop": "80px",
        "section-gap": "120px",
        "unit": "8px",
        "gutter": "32px",
        "margin-mobile": "20px"
      },
      fontFamily: {
        "headline-lg": ["Libre Caslon Text"],
        "label-lg": ["Hanken Grotesk"],
        "display-lg": ["Libre Caslon Text"],
        "body-lg": ["Hanken Grotesk"],
        "label-sm": ["Hanken Grotesk"],
        "headline-lg-mobile": ["Libre Caslon Text"],
        "headline-md": ["Libre Caslon Text"],
        "body-md": ["Hanken Grotesk"],
        "headline-sm": ["Libre Caslon Text"]
      },
      fontSize: {
        "headline-lg": ["48px", { lineHeight: "56px", fontWeight: "600" }],
        "label-lg": ["14px", { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "600" }],
        "display-lg": ["64px", { lineHeight: "72px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "label-sm": ["12px", { lineHeight: "16px", fontWeight: "500" }],
        "headline-lg-mobile": ["36px", { lineHeight: "44px", fontWeight: "600" }],
        "headline-md": ["32px", { lineHeight: "40px", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "headline-sm": ["24px", { lineHeight: "32px", fontWeight: "600" }]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ]
};
