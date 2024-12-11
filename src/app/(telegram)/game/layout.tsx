import '@app/app/globals.css'
import { Genos, Montserrat } from 'next/font/google'
import React from 'react'

const genos = Genos({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export default function gameLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${genos.className} ${montserrat.className}`}>
        {/*<TonConnectUIProvider manifestUrl="asda">*/}
        {children}
        {/*</TonConnectUIProvider>*/}
      </body>
    </html>
  )
}
