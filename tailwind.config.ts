import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: "#F1C763",
        secondary: "#E6293A",
        background: "#EBE4D3",
      },
      fontSize: {
        tiny: ["1rem", "1"],
        base: ["1.2rem", "1.2666666667"],
        medium: ["2rem", "1.11111111"],
        large: ["4rem", "1.1111111111"],
      }
    },
  },
  plugins: [],
}
export default config
