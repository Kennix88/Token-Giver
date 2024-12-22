'use client'

import { useTranslations } from 'use-intl'

export default function GamesList() {
  const t = useTranslations('game')
  return (
    <div className="flex flex-col gap-1 font-extralight">
      <div className="px-4 opacity-50">{t('games.title')}</div>
      <div className="flex flex-col gap-4 items-center justify-center font-medium">
        {t('soon')}
      </div>
    </div>
  )
}
