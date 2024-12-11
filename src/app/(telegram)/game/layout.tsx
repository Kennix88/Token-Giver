import '@app/app/globals.css'
import React from 'react'

export default function TamLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {/*<TonConnectUIProvider manifestUrl="asda">*/}
        {children}
        {/*</TonConnectUIProvider>*/}
      </body>
    </html>
  )
}
