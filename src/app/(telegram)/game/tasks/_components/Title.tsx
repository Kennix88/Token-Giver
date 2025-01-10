'use client'

import { useTranslations } from 'use-intl'

export default function Title() {
  const t = useTranslations('game.tasks')
  return (
    <div className="flex flex-col gap-2 uppercase">
      <div className="text-3xl font-bold ">{t('title')}</div>
      <div className="text-xl font-medium">
        {t('get')} <span className="opacity-80 font-normal">{t('for')}</span>
      </div>
    </div>
  )
}
