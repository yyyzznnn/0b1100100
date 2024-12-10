import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      fontFamily: {
        serif: ['Times New Roman', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: 'Times New Roman, serif',
            maxWidth: '65ch',
            margin: '0 auto',
            color: '#333',
            '--tw-prose-body': '#333',
            '--tw-prose-headings': '#111',
            '--tw-prose-links': '#111',
            p: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
              textAlign: 'center',
            },
            'ul > li': {
              marginTop: '0.75em',
              marginBottom: '0.75em',
            },
            ul: {
              paddingLeft: '1.5em',
            },
          }
        }
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config

