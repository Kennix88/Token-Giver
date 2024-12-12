'use client'
import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
// import WebApp from "@twa-dev/sdk";
import Image from 'next/image'

export default function Friends() {
  const [open, close] = useState(false)
  // const user = useContext(MagicCP)
  // console.log(user?.user)

  return (
    <div className="min-h-[70vh] max-h-[70vh] relative">
      <dialog open={open} className="modal backdrop-blur-lg">
        <div className="modal-box bg-[#272626] border border-white border-opacity-60">
          <div className="w-full absolute top-2 left-0">
            <p className="font-montserrat text-center text-xl text-white font-bold">
              Invite friends
            </p>
            <IoMdClose
              onClick={() => close(false)}
              className="absolute cursor-pointer right-5 text-2xl top-[50%] -translate-y-[50%] text-white"
            />
          </div>
          <div className="w- h-[1px] mt-5 bg-white"></div>
          <div
            className="bg-white text-black p-3 rounded-xl font-montserrat font-medium capitalize text-center mt-8 cursor-pointer"
            // onClick={() => {
            //   navigator.clipboard.writeText(
            //     `${process.env.WEBAPP_LINK}?startapp=${user?.user?.refer_code}`,
            //   )
            //   toast.success('Copied')
            // }}
          >
            Copy invite link
          </div>
          <div
            className="bg-white text-black p-3 rounded-xl font-montserrat font-medium capitalize text-center mt-2 cursor-pointer"
            // onClick={() =>
            //   WebApp.openTelegramLink(
            //     `https://t.me/share/url?url=${process.env.WEBAPP_LINK}/app?startapp=${user?.user?.refer_code}&text=${process.env.FRIENDS_MESSAGE}`,
            //   )
            // }
          >
            Share invite link
          </div>
          <p className="font-montserrat text-center font-medium text-white mt-5">
            Invite friends to get more {process.env.TOKEN_SYMBOL}
          </p>
        </div>
      </dialog>

      <p className="text-center text-white font-montserrat text-3xl font-bold mt-10">
        <span className="block">Invite friends</span>
        and get more {process.env.TOKEN_SYMBOL}
      </p>

      <Image
        src="/logo.png"
        alt="logo"
        className="mx-auto"
        width={100}
        height={82}
      />
      <p className="font-montserrat text-2xl text-center text-white font-bold text-opacity-50">
        Tap the button to invite friends
      </p>

      <button
        onClick={() => close(true)}
        className="p-3 w-full rounded-xl font-medium bg-white text-black font-montserrat absolute bottom-5">
        Invite Friends
      </button>
    </div>
  )
}
