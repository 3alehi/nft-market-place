import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
    'bg' : "#2B2B2B"

      },
      screens: {
  			sm: '640px',
  			md: '768px',
  			lg: '1024px',
  			xl: '1280px',
  			'2xl': '1300px'
  		},
      fontFamily: {
        spaceMono: ['Space Mono', 'monospace'],
        workSans: ['Work Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
