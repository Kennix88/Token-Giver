import friends from '@/app/_assets/icons/invite.svg'
import tgStar from '@/app/_assets/icons/tgStar.svg'
import ton from '@/app/_assets/icons/ton.svg'
import wallet from '@/app/_assets/icons/wallet.svg'
import { IconsEnum } from '@/types/icons.enum.ts'
import Image from 'next/image'
import { BsFillEmojiWinkFill, BsTwitterX } from 'react-icons/bs'
import { FaPercentage } from 'react-icons/fa'
import {
  FaBoltLightning,
  FaDiscord,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaPlay,
  FaRobot,
  FaTiktok,
  FaUser,
  FaViber,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa6'
import { HiStar } from 'react-icons/hi2'
import { IoLogoGameControllerA } from 'react-icons/io'
import { IoLogoVk } from 'react-icons/io5'
import { LuSprout } from 'react-icons/lu'
import { MdWebAsset } from 'react-icons/md'
import { RiTelegram2Fill } from 'react-icons/ri'
import { SiBinance, SiBoosty } from 'react-icons/si'

export interface IconInterface {
  key: IconsEnum
  title: string
  icon: JSX.Element
  color: string
}
export const IconsList: IconInterface[] = [
  {
    key: IconsEnum.other,
    title: 'Other',
    icon: <MdWebAsset className="text-2xl" />,
    color: '#211F26',
  },
  {
    key: IconsEnum.emoji,
    title: 'Emoji',
    icon: <BsFillEmojiWinkFill className="text-2xl" />,
    color: '#211F26',
  },
  {
    key: IconsEnum.telegram,
    title: 'Telegram',
    icon: <RiTelegram2Fill className="text-2xl" />,
    color: '#26A5E4',
  },
  {
    key: IconsEnum.wallet,
    title: 'Wallet',
    icon: <Image src={wallet} alt={'wallet'} width={24} height={24} />,
    color: '#4C9CE2',
  },
  {
    key: IconsEnum.ton,
    title: 'Ton',
    icon: <Image src={ton} alt={'ton'} width={24} height={24} />,
    color: '#0098EA',
  },
  {
    key: IconsEnum.ads,
    title: 'Ads',
    icon: <FaPlay className="text-2xl" />,
    color: '#fe0101',
  },
  {
    key: IconsEnum.boost,
    title: 'Boost',
    icon: <FaBoltLightning className="text-2xl" />,
    color: '#2276f4',
  },
  {
    key: IconsEnum.game,
    title: 'Game',
    icon: <IoLogoGameControllerA className="text-2xl" />,
    color: '#0098EA',
  },
  {
    key: IconsEnum.percent,
    title: 'Percent',
    icon: <FaPercentage className="text-2xl" />,
    color: '#2276f4',
  },
  {
    key: IconsEnum.friend,
    title: 'Friend',
    icon: <FaUser className="text-2xl" />,
    color: '#34c759',
  },
  {
    key: IconsEnum.premiumFriend,
    title: 'premiumFriend',
    icon: <FaUser className="text-2xl" />,
    color: '#5865F2',
  },
  {
    key: IconsEnum.friends,
    title: 'Friends',
    icon: <Image src={friends} alt={'friends'} width={24} height={24} />,
    color: '#34c759',
  },
  {
    key: IconsEnum.age,
    title: 'Age',
    icon: <LuSprout className="text-2xl" />,
    color: '#34c759',
  },
  {
    key: IconsEnum.premium,
    title: 'Premium',
    icon: <HiStar className="text-2xl" />,
    color: '#ffe500',
  },
  {
    key: IconsEnum.star,
    title: 'Star',
    icon: <Image src={tgStar} alt={'tg star'} width={24} height={24} />,
    color: '#ffe500',
  },
  {
    key: IconsEnum.robot,
    title: 'Robot',
    icon: <FaRobot className="text-2xl" />,
    color: '#1E5D88',
  },
  {
    key: IconsEnum.x,
    title: 'X',
    icon: <BsTwitterX className="text-2xl" />,
    color: '#000000',
  },
  {
    key: IconsEnum.youtube,
    title: 'Youtube',
    icon: <FaYoutube className="text-2xl" />,
    color: '#FF0000',
  },
  {
    key: IconsEnum.tiktok,
    title: 'Tiktok',
    icon: <FaTiktok className="text-2xl" />,
    color: '#000000',
  },
  {
    key: IconsEnum.instagram,
    title: 'Instagram',
    icon: <FaInstagram className="text-2xl" />,
    color: '#FF0069',
  },
  {
    key: IconsEnum.facebook,
    title: 'Facebook',
    icon: <FaFacebookF className="text-2xl" />,
    color: '#0866FF',
  },
  {
    key: IconsEnum.boosty,
    title: 'Boosty',
    icon: <SiBoosty className="text-2xl" />,
    color: '#F15F2C',
  },
  {
    key: IconsEnum.discord,
    title: 'Discord',
    icon: <FaDiscord className="text-2xl" />,
    color: '#5865F2',
  },
  {
    key: IconsEnum.binance,
    title: 'Binance',
    icon: <SiBinance className="text-2xl" />,
    color: '#F0B90B',
  },
  {
    key: IconsEnum.vk,
    title: 'VK',
    icon: <IoLogoVk className="text-2xl" />,
    color: '#0077FF',
  },
  {
    key: IconsEnum.github,
    title: 'GitHub',
    icon: <FaGithub className="text-2xl" />,
    color: '#181717',
  },
  {
    key: IconsEnum.viber,
    title: 'Viber',
    icon: <FaViber className="text-2xl" />,
    color: '#7360F2',
  },
  {
    key: IconsEnum.whatsapp,
    title: 'Whatsapp',
    icon: <FaWhatsapp className="text-2xl" />,
    color: '#25D366',
  },
]
