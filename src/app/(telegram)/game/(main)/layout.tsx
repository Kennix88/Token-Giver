import BottomNavigation from '@app/app/(telegram)/_components/BottomNavigation'
import Navbar from '@app/app/(telegram)/_components/Navbar'
import React from 'react'

export default function GameMainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="bg-black min-h-screen relative p-3">
      <Navbar />

      {children}
      <BottomNavigation />
    </div>
  )
}
