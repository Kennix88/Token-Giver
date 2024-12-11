'use client'
import CollaborationModal from '@app/app/(telegram)/game/(main)/collaboration/_components/CollaborationModal'
import Image from 'next/image'
import { useState } from 'react'

export default function CollaborationItem() {
  const [open, close] = useState(false)
  return (
    <div>
      <CollaborationModal close={close} open={open} />
      <div className="border-white border border-opacity-50 p-3 rounded-2xl flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="logo"
          className="mx-auto"
          width={100}
          height={82}
        />
        <div className="flex justify-between items-center w-full">
          <div className="">
            <p className="text-white font-montserrat font-medium text-sm">
              Crypto King Keyur
            </p>
            <p className="font-montserrat font-normal text-xs text-white text-opacity-60">
              Reward: 2000 RATS
            </p>
          </div>
          <button
            onClick={() => close(true)}
            className="px-3 py-1 bg-white bg-opacity-10 text-white rounded-full font-montserrat ">
            Start
          </button>
        </div>
      </div>
    </div>
  )
}
