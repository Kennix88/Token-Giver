//use server is required
'use server'

import { cookies } from 'next/headers'

import { defaultLocale } from './config'
import type { Locale } from './types'

// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.
const COOKIE_NAME = 'LOCALE_KEY'

const getLocale = async () => {
  const locale = cookies().get(COOKIE_NAME)
  return locale?.value || defaultLocale
}

const setLocale = async (locale?: string) => {
  cookies().set(COOKIE_NAME, (locale as Locale) || defaultLocale)
}

export { getLocale, setLocale }
