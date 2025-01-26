'use client'

import { useTranslations } from 'use-intl'

export default function Title() {
  const t = useTranslations('game.leaders')
  return (
    <div className="flex flex-col gap-2 uppercase">
      <div className="text-2xl font-bold ">{t('title')}</div>
    </div>
  )
}
