'use client'

export default function Navbar() {
  return (
    <div className="flex justify-between items-center sticky  top-0 py-2 bg-black bg-opacity-50 backdrop-blur-md">
      <p className="text-white text-xl font-bold font-montserrat">
        {process.env.PROJECT_NAME}
      </p>

      {/*<TonConnectButton />*/}
    </div>
  )
}
