'use client'
import { FaUser } from 'react-icons/fa6'
import { useTranslations } from 'use-intl'

export default function Statistics() {
  const t = useTranslations('game.leaders.statistics')
  const stats = [
    {
      title: 'users',
      value: 16470,
    },
  ]

  return (
    stats && (
      <div className="flex flex-col gap-1 font-extralight">
        <div className="px-4 opacity-50">{t('title')}</div>
        <div className="bg-surface-container-l2 p-4 rounded-md flex flex-row gap-4 bg-opacity-70 items-center justify-between text-sm">
          <div className="opacity-80">{t('users')}</div>
          <div className="text-nowrap font-medium flex flex-row gap-1 items-center">
            {(16470).toLocaleString('en-US')} <FaUser />
          </div>
        </div>
      </div>
    )
  )
}
