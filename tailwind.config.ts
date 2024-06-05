import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        perfil: '100% 40% 55% 35%',
      },
      blur: {
        full: '160px',
      },
      fontFamily: {
        Roboto: ['var(--font-roboto)'],
        MsMadi: ['var(--font-msmadi)'],
      },
      colors: {
        primary: '#10B981',
        secundary: '#1fb6ff',
        bgdark: '#09090B',
        bgdarksecundary: '#18181B',
        textdark: '#EEEEEE',
        bglight: '#F4F4F5',
        bglightsecundary: '#E4E4E7',
        textlight: '#262626',
      },
      boxShadow: {
        shadowlight:
          '0 0px 4px 0px rgba(000, 000, 000, 0.5), 0 3px 4px 1px rgba(000, 000, 000, 0.1)',
        shadowdark:
          '0 0px 8px 0px rgba(000, 000, 000), 0 3px 4px 1px rgba(000, 000, 000, 1)',
      },
    },
  },
  plugins: [],
}
export default config
