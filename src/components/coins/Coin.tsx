import coin from '@/app/_assets/icons/coin.svg'
import Image from 'next/image'

export default function Coin({ w = 40 }: { w: number }) {
  return <Image src={coin} alt={'Coin'} width={w} height={w} />
}
