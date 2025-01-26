'use client'

import { useTranslations } from 'use-intl'

export default function Title() {
  const t = useTranslations('game.friends')
  return (
    <div className="flex flex-col gap-2 uppercase">
      <div className="text-2xl font-bold ">{t('title')}</div>
      <div className="text-lg font-medium">
        {t('get')} <span className="opacity-80 font-normal">{t('for')}</span>
      </div>
    </div>
  )
}
