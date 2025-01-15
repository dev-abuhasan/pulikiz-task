import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundImage: {
          'header-bg': "url('@/services/image/bg/header-banner.jpg')",
        },
        brand: 'var(--brand)',
        info: 'var(--info)',
        secondary: 'var(--secondary)',
        success: 'var(--success)',
        warning: 'var(--warning)',
        error: 'var(--error)',
        dark: 'var(--dark)',
        bgDark: 'var(--bg_dark)',
        cardDark: 'var(--card_dark)',
        light: 'var(--light)',
        background: "rgba(var(--background))",
        border: "rgba(var(--border))",
        card: "rgba(var(--card))", "copy-primary": "rgba(var(--copy-primary))", "copy-secondary": "rgba(var(--copy-secondary))",
        cta: "rgba(var(--cta))", "cta-active": "rgba(var(--cta-active))", "cta-text": "rgba(var(--cta-text))",
        grape: "rgba(var(--grape))",
      },
    },
  },
  plugins: [],
} satisfies Config;