import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        heading: ['var(--font-heading)'],
        condensed: ['var(--font-condensed)'],
      },
      colors: {
        primary: {
          DEFAULT: "#FF6347", // Tomato red
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#2A2A2A",
          foreground: "#FFFFFF",
        },
        background: "#121212", // Darker background
        foreground: "#F5F5F5", // Off-white for better readability
        muted: {
          DEFAULT: "#2D2D2D",
          foreground: "#B0B0B0",
        },
        accent: {
          DEFAULT: "#FF6347", // Tomato red as accent
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#FF4444",
          foreground: "#FFFFFF",
        },
        border: "#3D3D3D", // Slightly lighter than background for better contrast
        input: "#2D2D2D",
        ring: "#FF6347", // Tomato red for focus rings
        card: {
          DEFAULT: "#1E1E1E",
          foreground: "#F5F5F5",
        },
        popover: {
          DEFAULT: "#1E1E1E",
          foreground: "#F5F5F5",
        },
      },
      typography: {
        headline: {
          css: {
            fontFamily: 'var(--font-heading)',
            fontWeight: '800',
            textTransform: 'uppercase',
            letterSpacing: '-0.5px',
          },
        },
        subheadline: {
          css: {
            fontFamily: 'var(--font-condensed)',
            fontWeight: '700',
            fontStyle: 'italic',
            letterSpacing: '0.5px',
          },
        },
        body: {
          css: {
            fontFamily: 'var(--font-sans)',
            fontWeight: '400',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          },
        },
        button: {
          css: {
            fontFamily: 'var(--font-sans)',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
          },
        },
      },
      borderRadius: {
        pill: '9999px',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 15px rgba(255, 156, 0, 0.5)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
  ],
} satisfies Config

export default config
