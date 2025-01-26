import gem from '@/app/_assets/icons/gem.svg'
import Image from 'next/image'

export default function Gem({ w = 40 }: { w: number }) {
  return <Image src={gem} alt={'Gem'} width={w} height={w} />
}
