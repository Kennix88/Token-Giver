import type { Metadata } from 'next'
import { getLocale } from 'next-intl/server'
import type { PropsWithChildren } from 'react'

import { Root } from '@/components/Root/Root'
import { I18nProvider } from '@/core/i18n/provider'

import NavBar from '@/app/(telegram)/game/_components/NavBar'
import '@/app/_assets/globals.css'
import { NextUIProvider } from '@nextui-org/react'
import 'normalize.css/normalize.css'

export const metadata: Metadata = {
  title: 'Token Giver',
  description: 'Play-to-earn game',
}

export default async function RootLayout({ children }: PropsWithChildren) {
  const locale = await getLocale()

  return (
    <html lang={locale} className={'dark scrollbar-hide'}>
      <body className="bg-background">
        <NextUIProvider>
          <I18nProvider>
            <Root>
              <div className="pt-4 px-4 pb-[80px] flex flex-col gap-4">
                {children}
              </div>
              <NavBar />
            </Root>
          </I18nProvider>
        </NextUIProvider>
      </body>
    </html>
  )
}
