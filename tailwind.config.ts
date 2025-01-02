import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        social: {
          telegram: '#26A5E4',
          x: '#000000',
          instagram: '#FF0069',
          youtube: '#FF0000',
          github: '#181717',
          vk: '#0077FF',
          coinmarketcap: '#17181B',
          coinbase: '#0052FF',
          kucoin: '#01BC8D',
          binance: '#F0B90B',
          ton: '#0098EA',
          boost: '#2276f4',
          friends: '#34c759',
          tiktok: '#000000',
          discord: '#5865F2',
          facebook: '#0866FF',
          viber: '#7360F2',
          whatsapp: '#25D366',
        },
        bronze: '#CD7F32',
        silver: '#C0C0C0',
        gold: '#FFD700',
        platinum: '#E5E4E2',
        deamond: '#B9F2FF',
        primary: '#cfbcff',
        'on-primary': '#381e72',
        'primary-container': '#4f378a',
        'on-primary-container': '#e9ddff',
        'inverse-primary': '#6750A4',
        'primary-fixed': '#EADDFF',
        'primary-fixed-dim': '#D0BCFF',
        'on-primary-fixed': '#21005D',
        'on-primary-fixed-variant': '#4F378B',
        secondary: '#cbc2db',
        'on-secondary': '#332d41',
        'secondary-container': '#4a4458',
        'on-secondary-container': '#e8def8',
        'secondary-fixed': '#E8DEF8',
        'secondary-fixed-dim': '#CCC2DC',
        'on-secondary-fixed': '#1D192B',
        'on-secondary-fixed-variant': '#4A4458',
        tertiary: '#efb8c8',
        'on-tertiary': '#4a2532',
        'tertiary-container': '#633b48',
        'on-tertiary-container': '#ffdad6',
        'tertiary-fixed': '#FFD8E4',
        'tertiary-fixed-dim': '#EFB8C8',
        'on-tertiary-fixed': '#31111D',
        'on-tertiary-fixed-variant': '#633B48',
        error: '#ffb4ab',
        'on-error': '#690005',
        'error-container': '#93000a',
        'on-error-container': '#ffdad6',
        warning: '#ffb872',
        'on-warning': '#4a2800',
        'warning-container': '#6a3c00',
        'on-warning-container': '#ffdcbe',
        success: '#5edca9',
        'on-success': '#003825',
        'success-container': '#005138',
        'on-success-container': '#7cf9c4',
        info: '#84cfff',
        'on-info': '#00344c',
        'info-container': '#004c6c',
        'on-info-container': '#c7e7ff',
        background: '#1c1b1e',
        'on-background': '#e6e1e6',
        surface: '#1c1b1e',
        'on-surface': '#e6e1e6',
        'surface-variant': '#49454e',
        'on-surface-variant': '#cac4cf',
        'surface-dim': '#141218',
        'surface-bright': '#3B383E',
        'surface-container-l2': '#0F0D13',
        'surface-container-l': '#1D1B20',
        'surface-container': '#211F26',
        'surface-container-h': '#2B2930',
        'surface-container-h2': '#36343B',
        'inverse-surface': '#E6E0E9',
        'inverse-on-surface': '#322F35',
        outline: '#948f99',
        'outline-variant': '#49454F',
        scrim: '#000000',
        shadow: '#000000',
        tg: {
          bg: 'var(--tg-bg-color)',
          bottomBar: 'var(--tg-bottom-bar-color)',
          header: 'var(--tg-header-color)',
          theme: {
            accentText: 'var(--tg-theme-accent-text-color)',
            bg: 'var(--tg-bg-color)',
            bottomBarBg: 'var(--tg-bottom-bar-color)',
            button: 'var(--tg-theme-button-color)',
            buttonText: 'var(--tg-theme-button-text-color)',
            destructiveText: 'var(--tg-theme-destructive-text-color)',
            headerBg: 'var(--tg-header-color)',
            hint: 'var(--tg-theme-hint-color)',
            link: 'var(--tg-theme-link-color)',
            secondaryBg: 'var(--tg-theme-secondary-bg-color)',
            sectionBg: 'var(--tg-theme-section-bg-color)',
            sectionHeader: 'var(--tg-theme-section-header-color)',
            sectionSeparator: 'var(--tg-theme-section-separator-color)',
            subtitle: 'var(--tg-theme-subtitle-color)',
            text: 'var(--tg-theme-text-color)',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [nextui()],
}
export default config
