import tonSvg from '@/app/_assets/ton.svg'
import Image from 'next/image'
import { MdMenu } from 'react-icons/md'

export default function Header() {
  return (
    <div className="flex flex-row gap-2 items-center justify-between p-4 bg-surface-container-l2 rounded-md">
      <div className="text-xl flex flex-row gap-2 items-center font-bold ">
        <Image src={tonSvg} alt={'logo'} width={40} height={40} />
        Token Giver
      </div>
      <div>
        <MdMenu className="text-2xl" />
      </div>
    </div>
  )
}
