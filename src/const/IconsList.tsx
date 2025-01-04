import friends from '@/app/_assets/invite.svg'
import tgStar from '@/app/_assets/tgStar.svg'
import ton from '@/app/_assets/ton.svg'
import wallet from '@/app/_assets/wallet.svg'
import { IconsEnum } from '@/types/icons.enum.ts'
import Image from 'next/image'
import { BsFillEmojiWinkFill, BsTwitterX } from 'react-icons/bs'
import {
  FaBoltLightning,
  FaDiscord,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaPlay,
  FaRobot,
  FaTiktok,
  FaViber,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa6'
import { HiStar } from 'react-icons/hi2'
import { IoLogoVk } from 'react-icons/io5'
import { LuSprout } from 'react-icons/lu'
import { MdWebAsset } from 'react-icons/md'
import { RiTelegram2Fill } from 'react-icons/ri'
import { SiBinance, SiBoosty } from 'react-icons/si'

export interface IconInterface {
  key: IconsEnum
  title: string
  icon: JSX.Element
  twColor: string
}
export const IconsList: IconInterface[] = [
  {
    key: IconsEnum.other,
    title: 'Other',
    icon: <MdWebAsset className="w-[24px]" />,
    twColor: 'surface-container',
  },
  {
    key: IconsEnum.emoji,
    title: 'Emoji',
    icon: <BsFillEmojiWinkFill className="w-[24px]" />,
    twColor: 'surface-container',
  },
  {
    key: IconsEnum.telegram,
    title: 'Telegram',
    icon: <RiTelegram2Fill className="w-[24px]" />,
    twColor: 'social-telegram',
  },
  {
    key: IconsEnum.wallet,
    title: 'Wallet',
    icon: <Image src={wallet} alt={'wallet'} width={24} height={24} />,
    twColor: 'social-wallet',
  },
  {
    key: IconsEnum.ton,
    title: 'Ton',
    icon: <Image src={ton} alt={'ton'} width={24} height={24} />,
    twColor: 'social-ton',
  },
  {
    key: IconsEnum.ads,
    title: 'Ads',
    icon: <FaPlay className="w-[24px]" />,
    twColor: 'social-ads',
  },
  {
    key: IconsEnum.boost,
    title: 'Boost',
    icon: <FaBoltLightning className="w-[24px]" />,
    twColor: 'social-boost',
  },
  {
    key: IconsEnum.friends,
    title: 'Friends',
    icon: <Image src={friends} alt={'friends'} width={24} height={24} />,
    twColor: 'social-friends',
  },
  {
    key: IconsEnum.age,
    title: 'Age',
    icon: <LuSprout className="w-[24px]" />,
    twColor: 'social-age',
  },
  {
    key: IconsEnum.premium,
    title: 'Premium',
    icon: <HiStar className="w-[24px]" />,
    twColor: 'social-premium',
  },
  {
    key: IconsEnum.star,
    title: 'Star',
    icon: <Image src={tgStar} alt={'tg star'} width={24} height={24} />,
    twColor: 'social-star',
  },
  {
    key: IconsEnum.robot,
    title: 'Robot',
    icon: <FaRobot className="w-[24px]" />,
    twColor: 'social-robot',
  },
  {
    key: IconsEnum.x,
    title: 'X',
    icon: <BsTwitterX className="w-[24px]" />,
    twColor: 'social-x',
  },
  {
    key: IconsEnum.youtube,
    title: 'Youtube',
    icon: <FaYoutube className="w-[24px]" />,
    twColor: 'social-youtube',
  },
  {
    key: IconsEnum.tiktok,
    title: 'Tiktok',
    icon: <FaTiktok className="w-[24px]" />,
    twColor: 'social-tiktok',
  },
  {
    key: IconsEnum.instagram,
    title: 'Instagram',
    icon: <FaInstagram className="w-[24px]" />,
    twColor: 'social-instagram',
  },
  {
    key: IconsEnum.facebook,
    title: 'Facebook',
    icon: <FaFacebookF className="w-[24px]" />,
    twColor: 'social-facebook',
  },
  {
    key: IconsEnum.boosty,
    title: 'Boosty',
    icon: <SiBoosty className="w-[24px]" />,
    twColor: 'social-boosty',
  },
  {
    key: IconsEnum.discord,
    title: 'Discord',
    icon: <FaDiscord className="w-[24px]" />,
    twColor: 'social-discord',
  },
  {
    key: IconsEnum.binance,
    title: 'Binance',
    icon: <SiBinance className="w-[24px]" />,
    twColor: 'social-binance',
  },
  {
    key: IconsEnum.vk,
    title: 'VK',
    icon: <IoLogoVk className="w-[24px]" />,
    twColor: 'social-vk',
  },
  {
    key: IconsEnum.github,
    title: 'GitHub',
    icon: <FaGithub className="w-[24px]" />,
    twColor: 'social-github',
  },
  {
    key: IconsEnum.viber,
    title: 'Viber',
    icon: <FaViber className="w-[24px]" />,
    twColor: 'social-viber',
  },
  {
    key: IconsEnum.whatsapp,
    title: 'Whatsapp',
    icon: <FaWhatsapp className="w-[24px]" />,
    twColor: 'social-whatsapp',
  },
]
