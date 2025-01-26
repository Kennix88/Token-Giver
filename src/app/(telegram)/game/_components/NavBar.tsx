'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BiSolidCrown } from 'react-icons/bi'
import { FaHome, FaTasks, FaUserFriends } from 'react-icons/fa'
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
      icon: <BiSolidCrown className="text-2xl" />,
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
      className={`bottom-0 left-0 right-0 fixed grid grid-cols-5 grid-rows-1 gap-2 p-2 rounded-t-xl bg-surface-container-l2 bg-opacity-90 z-[99]`}>
      {navItems.map((item) => (
        <Link
          href={`/game${item.href}`}
          key={item.name}
          className={`flex flex-col items-center justify-center font-[600] text-[12px] gap-1 ${
            location !== `/game${item.href}`
              ? 'text-on-surface-variant'
              : 'text-on-surface'
          }`}>
          <div
            className={`px-3 py-1 rounded-lg ${
              location !== `/game${item.href}`
                ? 'text-on-surface-variant'
                : 'text-on-surface bg-secondary-container'
            }`}>
            {item.icon}
          </div>
          <span
            className={` ${
              location !== `/game${item.href}`
                ? 'text-on-surface-variant'
                : 'text-on-surface'
            }`}>
            {item.name}
          </span>
        </Link>
      ))}
    </div>
  )
}
