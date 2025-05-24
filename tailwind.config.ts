import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['app/**/*.{ts,tsx}'],   // 必要に応じて 'pages/**/*.{js,jsx}' も追加
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;