import type { Metadata } from 'next'
import { getLocale } from 'next-intl/server'
import type { PropsWithChildren } from 'react'

import { Root } from '@/components/Root/Root'
import { I18nProvider } from '@/core/i18n/provider'

import '@/app/_assets/globals.css'
import 'normalize.css/normalize.css'

export const metadata: Metadata = {
  title: 'Your Application Title Goes Here',
  description: 'Your application description goes here',
}

export default async function RootLayout({ children }: PropsWithChildren) {
  const locale = await getLocale()

  return (
    <html lang={locale}>
      <body>
        <I18nProvider>
          <Root>{children}</Root>
        </I18nProvider>
      </body>
    </html>
  )
}
