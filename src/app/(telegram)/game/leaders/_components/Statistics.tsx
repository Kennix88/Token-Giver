'use client'
import addSuffixToNumber from '@/utils/addSuffixToNumber.util.ts'
import { useTranslations } from 'use-intl'

export default function Statistics() {
  const t = useTranslations('game.leaders.statistics')
  const stats = [
    {
      title: 'users',
      value: 16470,
    },
    {
      title: 'online',
      value: 14,
    },
    {
      title: 'day',
      value: 124,
    },
    {
      title: 'week',
      value: 500,
    },
    {
      title: 'month',
      value: 1647,
    },
  ]

  return (
    stats && (
      <div className="flex flex-col gap-1 font-extralight">
        <div className="px-4 opacity-50">{t('title')}</div>
        <div className="bg-surface-container-l2 p-4 rounded-md flex flex-row flex-wrap gap-4 text-sm">
          {stats.map((stat) => (
            <div key={stat.title} className="flex flex-row gap-2 items-center">
              <div className="opacity-80">{t(stat.title)}</div>
              <div className="text-nowrap font-normal ">
                {addSuffixToNumber(stat.value, 3)}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  )
}
