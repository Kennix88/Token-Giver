'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaHome, FaTasks, FaUserFriends } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa6'
import { IoLogoGameControllerA } from 'react-icons/io'
import { useTranslations } from 'use-intl'

export default function NavBar() {
  const t = useTranslations('game')
  const location = usePathname()

  const navItems = [
    {
      name: t('menu.home'),
      href: '',
      icon: <FaHome className="text-2xl" />,
    },
    {
      name: t('menu.tasks'),
      href: '/tasks',
      icon: <FaTasks className="text-2xl" />,
    },
    {
      name: t('menu.leaders'),
      href: '/leaders',
      icon: <FaStar className="text-2xl" />,
    },
    {
      name: t('menu.friends'),
      href: '/friends',
      icon: <FaUserFriends className="text-2xl" />,
    },
    {
      name: t('menu.games'),
      href: '/games',
      icon: <IoLogoGameControllerA className="text-2xl" />,
    },
  ]

  return (
    <div
      className={`bottom-0 left-0 right-0 fixed grid grid-cols-5 grid-rows-1 gap-2 p-2 rounded-t-xl bg-surface-container-l2`}>
      {navItems.map((item) => (
        <div
          key={item.name}
          className={`flex flex-col items-center justify-center font-[600] text-[12px] gap-1 ${
            location !== `/game${item.href}`
              ? 'text-on-surface-variant'
              : 'text-on-surface'
          }`}>
          <Link
            className={`px-3 py-1 rounded-lg ${
              location !== `/game${item.href}`
                ? 'text-on-surface-variant'
                : 'text-on-surface bg-secondary-container'
            }`}
            href={`/game${item.href}`}>
            {item.icon}
          </Link>
          <span
            className={` ${
              location !== `/game${item.href}`
                ? 'text-on-surface-variant'
                : 'text-on-surface'
            }`}>
            {item.name}
          </span>
        </div>
      ))}
    </div>
  )
}
