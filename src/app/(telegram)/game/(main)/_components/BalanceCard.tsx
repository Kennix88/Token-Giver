import Image from 'next/image'

export default function BalanceCard({ balance }: { balance: number }) {
  return (
    <div>
      <Image
        src="/logo.png"
        alt="logo"
        className="mx-auto"
        width={100}
        height={82}
      />
      <p className="text-white font-montserrat text-center text-2xl font-bold">
        {balance}
      </p>
      <p className="text-white font-montserrat text-center text-2xl font-bold text-opacity-50">
        {process.env.TOKEN_SYMBOL}
      </p>
    </div>
  )
}
