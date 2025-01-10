'use client'
import { MdOutlineCalendarMonth } from 'react-icons/md'
import { useTranslations } from 'use-intl'

export default function Deily() {
  const t = useTranslations('game.home')
  const days = [
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    true,
    false,
    false,
    false,
  ]

  return (
    <div className="flex flex-row gap-2 items-center justify-between p-2 border-surface-container-h border rounded-md bg-opacity-70">
      <div className="flex flex-row gap-2 items-center text-sm text-nowrap">
        <MdOutlineCalendarMonth /> {t('dailyCheckIn')}
      </div>
      <div className="flex flex-row flex-wrap gap-1 items-center justify-end ">
        {days
          .sort((a) => (a ? -1 : 1))
          .map((day, index) => (
            <div
              key={index}
              className={`w-[2px] rounded-full h-2 ${day ? 'bg-primary' : 'bg-surface-container-h2'}`}></div>
          ))}
      </div>
    </div>
  )
}
