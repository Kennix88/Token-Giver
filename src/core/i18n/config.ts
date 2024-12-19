export const defaultLocale = 'en'

export const timeZone = 'Europe/Amsterdam'

export const locales = [defaultLocale, 'ru'] as const

export const localesMap = [
  {
    key: 'en',
    title: 'English',
    icon: '/flags/GBR.svg',
  },
  { key: 'ru', title: 'Русский', icon: '/flags/RUS.svg' },
]
